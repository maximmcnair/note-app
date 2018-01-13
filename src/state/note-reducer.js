// Actions
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from './note-actions'

// ImmutableCollection
import * as ImmutableCollection from '../lib/ImmutableCollection'

const initialSate = ImmutableCollection.initialSate()

export default function notesReducer(state = initialSate, action) {
  switch(action.type){
    case CREATE_NOTE:
      return ImmutableCollection.create(state, action.note)
    case UPDATE_NOTE:
      return ImmutableCollection.update(state, action.note)
    case DELETE_NOTE:
      return ImmutableCollection.remove(state, action.note)
    default:
      return state
  }
}
