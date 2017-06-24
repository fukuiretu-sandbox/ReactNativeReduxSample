import { combineReducers } from 'redux'
import counter from './counter'

// Note: Reducerを追加したら↓に追記する
const rootReducer = combineReducers({
  counter
})
export default rootReducer
