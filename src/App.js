import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// Views
import List from './containers/List'
import View from './containers/View'

// Base styling
import './App.css'

// redux
import Store from './state/store'

// init redux store
const store = Store({})
console.log('initial store', store.getState())

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={List} exact />
          <Route path="/note/:id" component={View} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
