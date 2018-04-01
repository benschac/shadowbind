import define from '../../../src/index.js'

class InvalidBind extends window.HTMLElement {
  constructor () {
    super()
    this.bind = 'a string'
  }
  template () {
    return /* @html */`<span></span>`
  }
}

class RepeaterBindType extends window.HTMLElement {
  template () {
    return /* @html */`<invalid-bind :publish="myData"></invalid-bind>`
  }
  getActual () {
    try {
      this.publish({ myData: [1, 2, 3] })
    } catch (err) {
      return err.code || err.message
    }
    return 'no errors'
  }
  getExpected () {
    return 'shadowbind_bind_property_type'
  }
}

define(RepeaterBindType)
define(InvalidBind)
