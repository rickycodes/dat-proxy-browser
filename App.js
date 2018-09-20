import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import browser from './src/reducers'
import App from './src/container'

const initialState = {
  input: null,
  url: null,
  display_url: null,
  loading: false
}

const store = createStore(browser, initialState)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
