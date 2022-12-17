import { initState } from '../initState'
import * as profileTypes from '../types/profileTypes'

export const profileReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case profileTypes.CHANGE_NAME:
      return { ...state, name: payload }
      case profileTypes.IS_AUTH:
        return { ...state, isAuth: payload }
    default:
      return state
  }
}