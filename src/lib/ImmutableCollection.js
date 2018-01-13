// Dependencies
import { List } from 'immutable'

/**
 * Initial Sate
 * @returns {Immutable.List} Empty List
 */
export function initialSate() {
  return List([
    {id: '123', title: 'Gregor Samsa woke from troubled dreams', body: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly'},
    {id: '233', title: 'A collection of textile samples', body: 'It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.'}
  ])
}

/**
 * Create
 * @param {Immutable.List} List of items
 * @param {object} document to create
 * @returns {Immutable.List} Updated List
 */
export function create(list, document) {
  return list.unshift(Object.assign({}, document, {
    id: list.size + 1
  }))
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
