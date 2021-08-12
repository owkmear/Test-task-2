import { productsSuccess, productsFailure, productsRequest } from './internal'

import { getProducts } from '../../../utils/refillHelpers'

export function getProductsList() {
  return (dispatch, getState) => {
    const { name, id, value, sort, requiredPage: page } = getState().filter
    const filterParams = { name, id, value, sort, page }
    dispatch(productsRequest())
    return new Promise((resolve, reject) => {
      getProducts(filterParams)
        .then((responce) => {
          dispatch(productsSuccess(responce.data, Number(responce.page), Number(responce.total)))
          resolve()
        })
        .catch((error) => {
          dispatch(productsFailure('Ошибка сети'))
          reject(error)
        })
    })
  }
}
