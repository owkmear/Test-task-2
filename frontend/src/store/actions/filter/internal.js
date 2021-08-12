import * as t from '../../actionTypes/filter'

export function actionFilterName(filter) {
  return {
    type: t.FILTER_SET_NAME,
    payload: filter
  }
}

export function actionFilterId(filter) {
  return {
    type: t.FILTER_SET_ID,
    payload: filter
  }
}

export function actionFilterValue(filter) {
  return {
    type: t.FILTER_SET_VALUE,
    payload: filter
  }
}

export function actionFilterSort(filter) {
  return {
    type: t.FILTER_SET_SORT,
    payload: filter
  }
}

export function actionFilterPage(filter) {
  return {
    type: t.FILTER_SET_REQUIRED_PAGE,
    payload: filter
  }
}
