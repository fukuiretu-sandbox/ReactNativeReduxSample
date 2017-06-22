import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// const reducer = combineReducers(rootReducer)
const store = createStoreWithMiddleware(rootReducer)

export default store
