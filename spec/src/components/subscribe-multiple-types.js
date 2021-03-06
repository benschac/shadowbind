import Shadowbind from '../../../src/index.js'

let mixed

class SubscribeMultipleTypes extends Shadowbind.Element {
  subscribe () {
    return {
      mixed: ['state', 'prop', { attr: 'mixed', callback: val => Number(val) }],
      unrelated: ['attr']
    }
  }
  getActual () {
    let tests = []
    Shadowbind.publish({ mixed: 1 })
    tests.push(mixed)
    this.mixed(2)
    tests.push(mixed)
    this.setAttribute('mixed', 3)
    tests.push(mixed)
    this.setAttribute('unrelated', 'should ignore')
    Shadowbind.publish({ somethingUnrelated: 'abc' })
    this.data({ anotherUnrelated: 'dce' })
    tests.push(mixed) // Should reuse previous value here
    Shadowbind.publish({ mixed: 4 })
    tests.push(mixed)
    this.data({ mixed: 5 })
    tests.push(mixed)
    Shadowbind.publish({ mixed: 4 }) // Should be ignored since it hasn't changed
    tests.push(mixed)
    return tests
  }
  getExpected () {
    return [1, 2, 3, 3, 4, 5, 5]
  }
  bindings ({ mixed: newMixedValue }) {
    mixed = newMixedValue
    return {}
  }
  template () {
    return ''
  }
}

Shadowbind.define({ SubscribeMultipleTypes })
