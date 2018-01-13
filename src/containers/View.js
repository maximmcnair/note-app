import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// components
import Note from '../components/Note'

export class View extends Component {
  render () {
    console.log(
      this.props.match.params.id,
      this.props.notes
    )

    const note = this.props.notes.find(note => {
      return note.id === this.props.match.params.id
    })

    return (
      <div>
        { note && <Note note={note} /> }
        <Link to="/" className="btn">Close</Link>
      </div>
    )
  }
}

function select(state) {
  return {
    notes: state.notes,
  }
}

export default connect(select)(View)
