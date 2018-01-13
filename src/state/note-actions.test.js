// Actions
import * as actions from './note-actions'

describe('createNote()', () => {
  test('should action an action with correct data', () => {
    const note = {
      id: '2132',
      title: 'test copy',
    }
    const expectedAction = {
      type: actions.CREATE_NOTE,
      note,
    }
    expect(actions.createNote(note)).toEqual(expectedAction)
  })
})

describe('updateNote()', () => {
  test('should action an action with correct data', () => {
    const note = {
      id: '2132',
      title: 'test copy',
    }
    const expectedAction = {
      type: actions.UPDATE_NOTE,
      note,
    }
    expect(actions.updateNote(note)).toEqual(expectedAction)
  })
})

describe('deleteNote()', () => {
  test('should action an action with correct data', () => {
    const note = {
      id: '2132',
      title: 'test copy',
    }
    const expectedAction = {
      type: actions.DELETE_NOTE,
      note,
    }
    expect(actions.deleteNote(note)).toEqual(expectedAction)
  })
})
