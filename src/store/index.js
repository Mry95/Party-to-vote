import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { data } from './reducers'
import { getList } from './actions'
let reducer = combineReducers({
    data
})
let store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(getList())

window.store = store
export default store