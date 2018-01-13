// Dependencies
import { List } from 'immutable'

import * as ImmutableCollection from '../lib/ImmutableCollection'

describe('initialSate()', () => {
  it('should return empty List', () => {
    expect(ImmutableCollection.initialSate()).toEqual(List([]))
  })
})

describe('create()', () => {
  it('should add document in list if id is array in list', () => {
    const list = List([
      {id: '123', title: 'text'}
    ])
    const newItem = {id: '234', title: 'Some other text'}

    expect(ImmutableCollection.create(list, newItem)).toEqual(
      List([{id: '234', title: 'Some other text'}, {id: '123', title: 'text'}])
    )
  })

  it('should NOT add document if id is array in list', () => {
    const list = List([
      {id: '123', title: 'text'}
    ])
    const newItem = {id: '123', title: 'Some other text'}

    expect(ImmutableCollection.create(list, newItem)).toEqual(
      List([{id: '123', title: 'text'}])
    )
  })
})

describe('update()', () => {
  it('should update document if id is array in list', () => {
    const list = List([
      {id: '123', title: 'current text'}
    ])
    const updatedItem = {id: '123', title: 'new text'}

    expect(ImmutableCollection.update(list, updatedItem)).toEqual(
      List([{id: '123', title: 'new text'}])
    )
  })

  it('should return list if document is not found', () => {
    const list = List([
      {id: '123', title: 'hello'}
    ])
    const newItem = {id: '13223', title: 'Some other text'}

    expect(ImmutableCollection.update(list, newItem)).toEqual(
      List([{id: '123', title: 'hello'}])
    )
  })
})

describe('remove()', () => {
  it('should remove document', () => {
    const list = List([
      {id: '123', title: 'current text'}
    ])
    const itemToRemove = {id: '123'}

    expect(ImmutableCollection.remove(list, itemToRemove)).toEqual(
      List([])
    )
  })

  it('should return list if document is not found', () => {
    const list = List([
      {id: '123', title: 'hello'}
    ])
    const itemToRemove = {id: '13223', title: 'Some other text'}

    expect(ImmutableCollection.remove(list, itemToRemove)).toEqual(
      List([{id: '123', title: 'hello'}])
    )
  })
})
