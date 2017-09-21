
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import graph from './graph'

export default combineReducers({
  routing,
  graph
})
