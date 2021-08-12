import initialState from './initialState'
import * as t from '../../actionTypes/filter'

function filter(state = initialState, action) {
  switch (action.type) {
    case t.FILTER_SET_NAME:
      return { ...state, name: action.payload, requiredPage: 1 }
    case t.FILTER_SET_ID:
      return { ...state, id: action.payload, requiredPage: 1 }
    case t.FILTER_SET_VALUE:
      return { ...state, value: action.payload, requiredPage: 1 }
    case t.FILTER_SET_SORT:
      return { ...state, sort: action.payload, requiredPage: 1 }
    case t.FILTER_SET_REQUIRED_PAGE:
      return { ...state, requiredPage: action.payload }
    default:
      return state
  }
}

export default filter
