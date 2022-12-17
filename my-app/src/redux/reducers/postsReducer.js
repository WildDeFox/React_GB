import { initState } from '../initState'
import * as postTypes from '../types/postTypes'

export const postsReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case postTypes.SET_ALL_POSTS:
      return payload
    case postTypes.SET_POST:
      return [...state, payload]
    case postTypes.ADD_LIKE:
      return state.filter((item) => item.myId === payload.myId ? item.likes += 1 : item)
    case postTypes.REMOVE_POST:
      return state.filter((item) => item.myId !== payload.myId)
    default:
      return state
  }
}