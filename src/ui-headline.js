import store from './reducers'
import { subscribe } from '../lib/domino'

export default class UIHeadline extends HTMLElement { // eslint-disable-line
  constructor () {
    super()
    subscribe(this, 'color')
    this.root = this.attachShadow({ mode: 'open' })
    this.root.innerHTML = /* @html */`
    <div :css>
      <h1 on:click="toggleColor"><slot></slot></h1>
    </div>
    <style>
      div {
        border: 5px solid #eee;
        margin: 20px;
        padding: 20px;
      }
      h1 {
        color: var(--color);
        text-align: center;
      }
    </style>`
  }

  bind (color) {
    return {
      css: {
        color: color
      },
      toggleColor: () => store.dispatch({ type: 'TOGGLE_COLOR' })
    }
  }
}

window.customElements.define('ui-headline', UIHeadline)
