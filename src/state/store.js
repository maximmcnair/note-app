import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {autoRehydrate} from 'redux-persist'

import rootReducer from './root-reducer'

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      loggerMiddleware
    ),
    autoRehydrate()
  )
}
