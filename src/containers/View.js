import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class View extends Component {
  render () {
    return (
      <div>
        <h1>View</h1>
        <Link to="/">Go back to notes</Link>
      </div>
    )
  }
}
