// import thunk from 'redux-thunk'
import { createStore } from 'redux'
import rootReducer from '../reducers'

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// const reducer = combineReducers(rootReducer)
const store = createStore(rootReducer)

export default store
