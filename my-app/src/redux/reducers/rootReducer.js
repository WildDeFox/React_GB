import { combineReducers } from 'redux'
import { postInputsReducer } from './postInputsReducer'
import { postsReducer } from './postsReducer'
import { profileReducer } from './profileReducer'
import { articlesReducer } from './articlesReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  postInputs: postInputsReducer,
  profile: profileReducer,
  articles: articlesReducer
})