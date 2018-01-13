// Dependencies
import { List } from 'immutable'

import * as ImmutableCollection from '../lib/ImmutableCollection'

describe.skip('initialSate()', () => {
  it('should return empty List', () => {
    expect(ImmutableCollection.initialSate()).toEqual(List([]))
  })
})

describe('create()', () => {
  it('should add document with a unique id', () => {
    const list = List([
      {id: 1, title: 'text'}
    ])
    const newItem = {title: 'Some other text'}

    expect(ImmutableCollection.create(list, newItem)).toEqual(
      List([{id: 2, title: 'Some other text'}, {id: 1, title: 'text'}])
    )
  })
})

describe('update()', () => {
  it('should update document if id is array in list', () => {
    const list = List([
      {id: 1, title: 'current text'}
    ])
    const updatedItem = {id: 1, title: 'new text'}

    expect(ImmutableCollection.update(list, updatedItem)).toEqual(
      List([{id: 1, title: 'new text'}])
    )
  })

  it('should return list if document is not found', () => {
    const list = List([
      {id: 1, title: 'hello'}
    ])
    const newItem = {id: 4, title: 'Some other text'}

    expect(ImmutableCollection.update(list, newItem)).toEqual(
      List([{id: 1, title: 'hello'}])
    )
  })
})

describe('remove()', () => {
  it('should remove document', () => {
    const list = List([
      {id: 1, title: 'current text'}
    ])
    const itemToRemove = {id: 1}

    expect(ImmutableCollection.remove(list, itemToRemove)).toEqual(
      List([])
    )
  })

  it('should return list if document is not found', () => {
    const list = List([
      {id: 1, title: 'hello'}
    ])
    const itemToRemove = {id: 4, title: 'Some other text'}

    expect(ImmutableCollection.remove(list, itemToRemove)).toEqual(
      List([{id: 1, title: 'hello'}])
    )
  })
})
