import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import products from './reducers/products'
import filter from './reducers/filter'

const rootReducer = combineReducers({ products, filter })
const middleware = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
