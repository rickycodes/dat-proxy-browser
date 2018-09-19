import {
  SET_URL,
  SET_DISPLAY_URL,
  SET_INPUT,
  TOGGLE_LOADING
} from './constants'

export function setUrl (url) {
  return {
    type: SET_URL,
    url
  }
}

export function setDisplayUrl (url) {
  return {
    type: SET_DISPLAY_URL,
    url
  }
}

export function setInput (input) {
  return {
    type: SET_INPUT,
    input
  }
}

export function toggleLoading () {
  return {
    type: TOGGLE_LOADING
  }
}
