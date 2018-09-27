import {
  SET_URL,
  SET_INPUT,
  SET_LOADING,
  GO_BACK,
  GO_FORWARD
} from './constants'

export function setUrl (url) {
  return {
    type: SET_URL,
    url
  }
}

export function setInput (input) {
  return {
    type: SET_INPUT,
    input
  }
}

export function setLoading (loading) {
  return {
    type: SET_LOADING,
    loading
  }
}

export function goBack (webview) {
  webview.goBack()
  return {
    type: GO_BACK
  }
}

export function goForward (webview) {
  webview.goForward()
  return {
    type: GO_FORWARD
  }
}
