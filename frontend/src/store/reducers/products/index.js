import initialState from './initialState'
import * as t from '../../actionTypes/products'

function products(state = initialState, action) {
  switch (action.type) {
    case t.PRODUCTS_GET_REQUEST:
      return { ...state, errorMessage: null }
    case t.PRODUCTS_GET_SUCCESS:
      return { ...state, data: action.payload, page: action.page, totalPages: action.totalPages, isLoading: false }
    case t.PRODUCTS_GET_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false }
    default:
      return state
  }
}

export default products
