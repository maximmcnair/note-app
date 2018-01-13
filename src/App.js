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

// if (process.env.NODE_ENV === 'development') localForage.clear()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rehydrated: false,
    }
  }

  componentDidMount() {
    // begin periodically persisting the store
    persistStore(store, {
      storage: localForage,
    }, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if (!this.state.rehydrated) return <div />

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
