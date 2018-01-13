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
    this.validData = this.validData.bind(this)
  }

  handleTitleChange(title) {
    this.setState({title})
  }

  handleBodyChange(body) {
    this.setState({body})
  }

  validData() {
    const {title, body} = this.state
    return title !== '' || body !== ''
  }

  createNote() {
    if (!this.validData()) return
    const {title, body} = this.state
    this.props.dispatch(createNote({title, body}))
    this.setState({isCreated: true})
  }

  render() {
    const {title, body, isCreated} = this.state
    return (
      <div>
        <CreateForm
          titleValue={title}
          handleTitleChange={this.handleTitleChange}
          bodyValue={body}
          handleBodyChange={this.handleBodyChange}
        />
        <a onClick={this.createNote} className={this.validData() ? 'btn' : 'btn btn--disabled'}>Create Note</a>
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
