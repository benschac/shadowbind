import trace from './lib/trace.js'
import error from './lib/error.js'
import getType from './util/getType.js'
import pascalToTrainCase from './util/pascalToTrainCase.js'
import * as queue from './lib/queue.js'
import parseSubscriptions from './lib/parseSubscriptions.js'

let components = {}
let componentId = 0
export { components }

export default function define (name, Component = {}) {
  trace.reset()
  if (!arguments.length) {
    error(
      'shadowbind_define_without_arguments',
      'The first argument of define() should be a class extending ' +
        'HTMLElement, but no arguments were given'
    )
  }

  if (arguments.length === 1) {
    // Name is optional
    Component = name
    name = pascalToTrainCase(Component.name)
  }

  if (!(Component.prototype instanceof window.HTMLElement)) {
    error(
      'shadowbind_subscribe_type',
      'The first argument of define() should be a class extending ' +
        `HTMLElement, not "${getType(Component)}"`
    )
  }

  const rawSubscriptions = Component.prototype.subscribe
    ? Component.prototype.subscribe()
    : {}

  const { observedAttrs } = parseSubscriptions(rawSubscriptions)

  class ShadowComponent extends Component {
    static get observedAttributes () {
      return observedAttrs
    }
    constructor () {
      super()
      if (!this.sbPrivate) this.sbPrivate = {}

      const {
        subscriptions,
        observedProps,
        observedState
      } = parseSubscriptions(this.subscribe ? this.subscribe() : {})

      if (Component.prototype.template) {
        this.attachShadow({ mode: 'open' })
        const template = document.createElement('template')
        template.innerHTML = Component.prototype.template.call(this)
        this.shadowRoot.appendChild(template.content.cloneNode(true))
      }

      if (observedProps.length) {
        for (const prop of observedProps) {
          this[prop] = value => {
            queue.add(this, { props: { [prop]: value } })
            // TODO: forward properties
          }
        }
      }

      this.sbPrivate.getDepth = () => {
        if (
          !this.parentNode ||
          !this.parentNode.host ||
          !this.parentNode.host.sbPrivate
        ) {
          return 0
        }
        return this.parentNode.host.sbPrivate.getDepth() + 1
      }

      this.sbPrivate.observedState = observedState
      this.sbPrivate.observedProps = observedProps
      this.sbPrivate.subscriptions = subscriptions
    }
    connectedCallback () {
      componentId++
      this.sbPrivate.id = componentId
      components[componentId] = this
      forwardProperty(Component, 'connectedCallback')
    }
    disconnectedCallback () {
      delete components[componentId]
      forwardProperty(Component, 'disconnectedCallback')
    }
    attributeChangedCallback (attrName, oldValue, newValue) {
      queue.add(this, { attrs: { [attrName]: newValue } })
      forwardProperty(Component, 'attributeChangedCallback')
    }
    publish (bindings) {
      queue.add(this, { direct: bindings })
    }
  }

  window.customElements.define(name, ShadowComponent)
}

function forwardProperty (Component, propertyName) {
  if (Component.prototype[propertyName]) {
    Component.prototype[propertyName].call(this)
  }
}
