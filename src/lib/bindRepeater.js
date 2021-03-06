import getType from '../util/getType.js'
import trace from './trace.js'
import error from './error.js'
import bindElement from './bindElement.js'
import * as queue from './queue.js'

let emptyExamples = {}
let placeholderId = 0

export default function bindRepeater (component, element, bindings) {
  const emptyRepeaterId = getEmptyRepeaterId(element)
  if (!firstElementInRepeat(element) && !emptyRepeaterId) return

  let { key, value } = loadKeyValue(element, emptyRepeaterId, bindings)

  if (value == null) return
  if (getType(value) !== 'array') {
    error(
      'shadowbind_map_type',
      `"${key}" must be an array when using ":map", but it was ` +
        `"${getType(value)}"`
    )
  }

  trace.add('repeaterState', value)

  const elements = emptyRepeaterId ? [] : currentRepeaterElements(element)
  const currentCount = elements.length
  const expectedCount = value.length

  if (currentCount < expectedCount) {
    const count = expectedCount - currentCount
    element = createElements(element, elements, emptyRepeaterId, count)
  } else if (currentCount > expectedCount) {
    removeElements(elements, element.parentNode, currentCount - expectedCount)
  }

  if (expectedCount === 0) return

  if (!element.sbPrivate) {
    error(
      'shadowbind_map_non_component',
      `":map" must be used on a shadowbind web component`
    )
  }

  for (let i = 0; i < expectedCount; i++) {
    bindElement(component, element, bindings)
    queue.add(element, { direct: value[i] })
    element = element.nextElementSibling
  }

  trace.remove('repeaterState')
}

function firstElementInRepeat (element) {
  if (!element.getAttribute(':map')) return false
  const partOfRepeat = PartOfRepeat(element)
  if (element.previousElementSibling === null) return true
  return !partOfRepeat(element.previousElementSibling)
}

function PartOfRepeat (element) {
  const elementKey = element.getAttribute(':map')
  return compare => {
    if (compare === null) return false
    const key = compare.getAttribute(':map')
    return elementKey === key
  }
}

function loadKeyValue (element, emptyRepeaterId, bindings) {
  const key = (() => {
    if (!emptyRepeaterId) return element.getAttribute(':map')
    return emptyExamples[emptyRepeaterId].getAttribute(':map')
  })()
  const value = bindings[key]
  return { key, value }
}

function currentRepeaterElements (element) {
  const partOfRepeat = PartOfRepeat(element)
  let elements = []
  do {
    elements.push(element)
    element = element.nextElementSibling
  } while (partOfRepeat(element))

  return elements
}

function getEmptyRepeaterId (element) {
  return element.getAttribute('sb:r')
}

function createElements (element, elements, emptyRepeaterId, count) {
  const example = (() => {
    if (emptyRepeaterId) return emptyExamples[emptyRepeaterId]
    return element
  })()

  const prependElement = (() => {
    if (emptyRepeaterId) return element.nextElementSibling
    return elements[elements.length - 1].nextElementSibling
  })()

  const previousElement = element.previousElementSibling
  const parent = element.parentNode

  for (let i = 0; i < count; i++) {
    const newElement = example.cloneNode(true)
    parent.insertBefore(newElement, prependElement)
  }

  if (emptyRepeaterId) {
    parent.removeChild(element)
    if (!previousElement) return parent.firstElementChild
    return previousElement.nextElementSibling
  }
  return element
}

function removeElements (elements, parent, count) {
  if (elements.length === count) {
    const placeholder = generatePlaceholder()
    emptyExamples[placeholderId] = elements[0].cloneNode(true)
    const prependElement = elements[elements.length - 1].nextElementSibling
    parent.insertBefore(placeholder, prependElement)
  }
  const toRemove = elements.slice(-count)
  toRemove.forEach(element => parent.removeChild(element))
}

function generatePlaceholder () {
  placeholderId++
  const placeholder = document.createElement('span')
  placeholder.setAttribute('sb:r', placeholderId)
  return placeholder
}
