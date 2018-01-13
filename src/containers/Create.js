import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

// components
import CreateForm from '../components/CreateForm'

// actions
import {createNote} from '../state/note-actions'

export class Create extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      body: '',
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.createNote = this.createNote.bind(this)
  }

  handleTitleChange(title) {
    this.setState({title})
  }

  handleBodyChange(body) {
    this.setState({body})
  }

  createNote () {
    const {title, body} = this.state
    this.props.dispatch(createNote({title, body}))
    this.setState({isCreated: true})
  }

  render () {
    const {title, body, isCreated} = this.state

    return (
      <div>
        <CreateForm
          titleValue={title}
          handleTitleChange={this.handleTitleChange}
          bodyValue={body}
          handleBodyChange={this.handleBodyChange}
        />
        <span onClick={this.createNote} className="btn">Create Note</span>
        { this.props.notes.length > 0 && <Link to="/" className="small">Cancel</Link> }
        { isCreated && <Redirect to="/" /> }
      </div>
    )
  }
}

function select(state) {
  return {
    notes: state.notes,
  }
}

export default connect(select)(Create)
