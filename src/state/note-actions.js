/**
 * Action Types
 */
export const CREATE_NOTE = 'CREATE_NOTE'
// NOTE in a real app we would have Read methods here to
// request data from our api:
// `REQUEST_NOTES` and `RECIEVE_NOTES`
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

/**
 * Actions
 */
export function createNote(note){
  return {
    type: CREATE_NOTE
  , note
  }
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE
  , note
  }
}

export function deleteNote(note) {
  return {
    type: DELETE_NOTE
  , note
  }
}
