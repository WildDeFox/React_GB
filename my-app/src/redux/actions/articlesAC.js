import * as articlesTypes from '../types/articlesTypes'
import { api } from '../../constants'

export const setArticles = (data) => {
  return { type: articlesTypes.SET_ARTICLES, payload: data }
}

export const fetchDataArticles = () => async (dispatch, getState) => {
  const response = await fetch(api)
  if (response.ok) {
    const data = await response.json()
    dispatch(setArticles(data))
  }
}