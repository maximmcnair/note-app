import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import localForage from 'localforage'
import {persistStore} from 'redux-persist'

// Views
import List from './containers/List'
import View from './containers/View'
import Create from './containers/Create'

// Base styling
import './App.css'

// redux
import Store from './state/store'

// init redux store
const store = Store({})
console.log('initial store', store.getState())

persistStore(store, {
  storage: localForage,
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Route path="/" component={List} exact />
            <Route path="/note/:id" component={View} exact />
            <Route path="/create" component={Create} exact />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
