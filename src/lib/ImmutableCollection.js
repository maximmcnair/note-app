// Dependencies
import { List } from 'immutable'

/**
 * Initial Sate
 * @returns {Immutable.List} Empty List
 */
export function initialSate() {
  return List([])
}

/**
 * Create
 * @param {Immutable.List} List of items
 * @param {object} document to create
 * @returns {Immutable.List} Updated List
 */
export function create(list, document) {
  var index = list.findIndex((item) => {
    return item.id === document.id
  })

  if (index !== -1) {
    return list
  } else {
    return list.unshift(document)
  }
}

/**
 * Update
 * @param {Immutable.List} List of items
 * @param {object} document to add
 * @returns {Immutable.List} Updated List
 */
export function update(list, document) {
  var index = list.findIndex((item) => {
    return item.id === document.id
  })

  if (index === -1) {
    return list
  } else {
    return list.update(index, (item) => {
      return document
    })
  }
}


/**
 * Remove
 * @param {Immutable.List} List of items
 * @param {object} document to remove
 * @returns {Immutable.List} Updated List
 */
export function remove(list, document) {
  var index = list.findIndex((item) => {
    return item.id === document.id
  })

  if (index === -1) {
    return list
  } else {
    return list.remove(index)
  }
}
