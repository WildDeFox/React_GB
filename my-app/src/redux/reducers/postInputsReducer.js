import { initState } from '../initState'

export const postInputsReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'POST_TYPING':
      return { ...state, ...payload }
    case 'POST_CLEAR_INPUTS':
      return { ...payload }
    default:
      return state
  }
}