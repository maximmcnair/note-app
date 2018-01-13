import reducer from './note-reducer'
import * as actions from './note-actions'

const initialState = [
  {id: '1', title: 'text'}
]

describe('create()', () => {
  it('should add document with a unique id', () => {
    expect(
      reducer([...initialState], {
        type: actions.CREATE_NOTE,
        note: {title: 'Some other text'},
      })
    ).toEqual([{id: '1', title: 'text'}, {id: '2', title: 'Some other text'}])
  })
})

describe('update()', () => {
  it('should update document if id is array in list', () => {
    expect(
      reducer([
        {id: '1', title: 'text'}, {id: '2', title: 'Some other text'}
      ], {
        type: actions.UPDATE_NOTE,
        note: {id: '1', title: 'Some other text'},
      })
    ).toEqual([
      {id: '1', title: 'Some other text'}, {id: '2', title: 'Some other text'}
    ])
  })

  it('should return list if document is not found', () => {
    expect(
      reducer([
        {id: '1', title: 'text'}, {id: '2', title: 'Some other text'}
      ], {
        type: actions.UPDATE_NOTE,
        note: {id: '3', title: 'Some other text'},
      })
    ).toEqual([
      {id: '1', title: 'text'}, {id: '2', title: 'Some other text'}
    ])
  })
})

describe('remove()', () => {
  it('should remove document', () => {
    expect(
      reducer([
        {id: '1', title: 'text'}, {id: '2', title: 'Some other text'}
      ], {
        type: actions.DELETE_NOTE,
        note: {id: '1', title: 'Some other text'},
      })
    ).toEqual([
      {id: '2', title: 'Some other text'}
    ])
  })

  it('should return list if document is not found', () => {
    expect(
      reducer([
        {id: '1', title: 'text'}, {id: '2', title: 'Some other text'}
      ], {
        type: actions.DELETE_NOTE,
        note: {id: '3', title: 'Some other text'},
      })
    ).toEqual([
      {id: '1', title: 'text'}, {id: '2', title: 'Some other text'}
    ])
  })
})
