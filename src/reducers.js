import {
  SET_URL,
  SET_INPUT,
  SET_LOADING
} from './constants'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state, input: action.input
      }
    case SET_URL:
      return {
        ...state, url: action.url
      }
    case SET_LOADING:
      return {
        ...state, loading: action.loading
      }
    default:
      return state
  }
}
