import Shadowbind from '../../../src/index.js'

let eventHasRun = false

function doTest (shadowRoot) {
  const testEl = shadowRoot.querySelector('#tag-switcher')
  const stillHasAttr = testEl.getAttribute('data') === 'should not be removed'
  const stillHasChildren = (() => {
    const child = shadowRoot.querySelector('#tag-switcher > h1 > span')
    if (!child) return false
    return child.innerHTML === 'Child Element'
  })()

  const stillHasEvents = (() => {
    eventHasRun = false
    testEl.dispatchEvent(new Event('click')) // eslint-disable-line no-undef
    return eventHasRun
  })()

  return [
    testEl.tagName.toLowerCase(),
    stillHasAttr ? 'attrOK' : 'NO ATTR!',
    stillHasChildren ? 'childrenOK' : 'NO CHILDREN!',
    stillHasEvents ? 'eventsOK' : 'NO EVENTS!'
  ]
}

class BindTag extends Shadowbind.Element {
  template () {
    return /* @html */`
      <div :tag="currentTag"
      data="should not be removed"
      on:click="eventTest"
      id="tag-switcher">
        <h1><span>Child Element</span></h1>
      </div>
    `
  }
  eventTest (event) {
    eventHasRun = true
  }
  getExpected () {
    return [
      ['div', 'attrOK', 'childrenOK', 'eventsOK'],
      ['app-container', 'attrOK', 'childrenOK', 'eventsOK'],
      ['app-page', 'attrOK', 'childrenOK', 'eventsOK'],
      ['span', 'attrOK', 'childrenOK', 'eventsOK']
    ]
  }
  getActual () {
    this.data({ currentTag: 'div' })
    const shadowRoot = document.querySelector('bind-tag').shadowRoot
    let tests = []
    tests.push(doTest(shadowRoot))
    this.data({ currentTag: 'app-container' })
    tests.push(doTest(shadowRoot))
    this.data({ currentTag: 'app-page' })
    tests.push(doTest(shadowRoot))
    this.data({ currentTag: 'span' })
    tests.push(doTest(shadowRoot))
    return tests
  }
}

Shadowbind.define({ BindTag })
