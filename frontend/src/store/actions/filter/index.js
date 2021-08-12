import { actionFilterName, actionFilterId, actionFilterValue, actionFilterSort, actionFilterPage } from './internal'
import { getProductsList } from '../products'

export function setFilterName(filter) {
  return (dispatch) => {
    dispatch(actionFilterName(filter))
    dispatch(getProductsList())
  }
}

export function setFilterId(filter) {
  return (dispatch) => {
    dispatch(actionFilterId(filter))
    dispatch(getProductsList())
  }
}

export function setFilterValue(filter) {
  return (dispatch) => {
    dispatch(actionFilterValue(filter))
    dispatch(getProductsList())
  }
}

export function setFilterSort(filter) {
  return (dispatch) => {
    dispatch(actionFilterSort(filter))
    dispatch(getProductsList())
  }
}

export function setFilterPage(filter) {
  return (dispatch) => {
    dispatch(actionFilterPage(filter))
    dispatch(getProductsList())
  }
}
