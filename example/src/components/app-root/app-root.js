import Shadowbind from '../../../../dist/shadowbind'
import * as counter from '../../actions/counter'

class AppRoot extends HTMLElement {
  connectedCallback() {
    this.data({}) // TODO: remove this godawful hack
  }
  increment() {
    counter.increment()
  }
  template() {
    return /* @html */`
      <style>
        :host { font-family: sans-serif; }
      </style>
      <count-viewer></count-viewer>
      <button on:click="increment">Increment</button>
    `
  }
}

Shadowbind.define(AppRoot)