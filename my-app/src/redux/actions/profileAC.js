import * as profileTypes from '../types/profileTypes'

export const changeName = (data) => {
  return { type: profileTypes.CHANGE_NAME, payload: data }
}

export const auth = (data) => {
  return { type: profileTypes.IS_AUTH, payload: data }
}