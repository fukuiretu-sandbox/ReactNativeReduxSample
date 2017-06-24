import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from '../reducers'

const middlewares = [
  thunk
]

if (__DEV__) {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger)
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer)

export default store
