import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Create extends Component {
  render () {
    return (
      <div>
        <h1>Create</h1>
        <Link to="/">Go back to notes</Link>
      </div>
    )
  }
}
