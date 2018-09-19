import {
    SET_URL,
    SET_DISPLAY_URL,
    SET_INPUT,
    TOGGLE_LOADING
} from './constants'

const browser = (state = {}, action) => {
  // console.log(action)
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state, input: action.input
      }
    case SET_DISPLAY_URL:
      return {
        ...state, display_url: action.url
      }
    case SET_URL:
      return {
        ...state, url: action.url
      }
    case TOGGLE_LOADING:
      return {
        ...state, loading: !state.loading
      }
    default:
      return state
  }
}

export default browser