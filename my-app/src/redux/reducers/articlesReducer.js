import { initState } from '../initState'
import * as articlesTypes from '../types/articlesTypes'

export const articlesReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case articlesTypes.SET_ARTICLES:
      return payload
    default:
      return state
  }
}