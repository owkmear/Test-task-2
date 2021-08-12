import * as t from '../../actionTypes/products'

export function productsRequest() {
  return {
    type: t.PRODUCTS_GET_REQUEST
  }
}

export function productsSuccess(list, page, totalPages) {
  return {
    type: t.PRODUCTS_GET_SUCCESS,
    payload: list,
    page,
    totalPages
  }
}

export function productsFailure(errorMessage) {
  return {
    type: t.PRODUCTS_GET_FAILURE,
    payload: errorMessage
  }
}
