import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class List extends Component {
  render () {
    return (
      <div>
        <h1>List</h1>
        <ul>
          <li><Link to="/note/2">Go to note 2</Link></li>
          <li><Link to="/note/3">Go to note 3</Link></li>
        </ul>
      </div>
    )
  }
}
