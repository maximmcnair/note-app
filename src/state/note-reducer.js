// Actions
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from './note-actions'

export default function notesReducer(state = [], action) {
  switch(action.type){
    case CREATE_NOTE:
      const note = Object.assign({}, action.note, {id: state.length + 1 + ''})
      return [...state, note]
    case UPDATE_NOTE:
      return state.slice().map(item => {
        if (item.id === action.note.id) return Object.assign({}, action.note)
        return item
      })
    case DELETE_NOTE:
      return state.slice().filter(item => {
        if (item.id === action.note.id) return false
        return true
      })
    default:
      return state
  }
}
