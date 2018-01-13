import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

// components
import NotePreview from '../components/NotePreview'

export class List extends Component {
  render () {
    const {notes} = this.props

    return (
      <div>
        <ul>
          {notes.map(note =>
            <Link to={`/note/${note.id}`} key={note.id}>
              <NotePreview note={note} />
            </Link>
          )}
        </ul>
        <Link to="/create">Create Note</Link>
      </div>
    )
  }
}

function select(state) {
  return {
    notes: state.notes,
  }
}

export default connect(select)(List)
