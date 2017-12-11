import trace from './trace.js'
import walkFragment from '../util/walkFragment.js'
import walkElement from '../util/walkElement.js'
import parseAttribute from './parseAttribute.js'
import bindElement from './bindElement.js'
import * as repeaterState from '../lib/repeaters/repeaterState.js'
import applyRepeater from './repeaters/apply.js'
import repeaterInitialize, { repeaters } from './repeaters/initialize.js'

let currentRepeater

// Apply the state to the element's shadowDom
export default function bindComponent (component, bindings) {
  repeaterState.newBindings(bindings)

  walkFragment(component, element => {
    if (element.getAttribute(':for')) {
      firstAppearanceOfRepeater(component, element)
      return
    }

    trackRepeaters(element)
    trace.add('element', element)

    walkElement(element, attribute => {
      trace.add('attribute', attribute)
      const parsedAttribute = parseAttribute(attribute)
      if (parsedAttribute) {
        bindElement(element, repeaterState.current(), parsedAttribute)
      }
    })

    trace.remove('attribute')
    trace.remove('element')
  })
}

function firstAppearanceOfRepeater (component, element) {
  const prependElement = element.nextSibling
  const repeatId = repeaterInitialize(element)

  return applyRepeater({
    component,
    repeatId,
    prependElement,
    localBindings: repeaterState.current()
  })
}

function trackRepeaters (element) {
  const repeaterId = (() => {
    for (let attr of element.attributes) {
      const matches = /^(sb:r\d+)$/.exec(attr.name)
      if (matches) return matches[1]
    }
  })()

  if (
    !repeaterId &&
    currentRepeater &&
    element.previousElementSibling &&
    element.previousElementSibling.getAttribute(currentRepeater) !== null
  ) {
    currentRepeater = null
    repeaterState.endRepeater()
    return
  }

  if (!repeaterId) return

  if (repeaterId === currentRepeater) {
    repeaterState.incrementRepeater()
    return
  }

  const repeater = repeaters[repeaterId]
  currentRepeater = repeaterId
  if (currentRepeater) repeaterState.endRepeater()
  repeaterState.startRepeater(repeater.as, repeater.loopKey)
}
