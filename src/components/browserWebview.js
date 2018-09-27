import React, { Component } from 'react'
import {
  WebView,
  BackHandler
} from 'react-native'

import GestureView from 'react-native-gesture-view'
import styles from '../styles'
import { PROXY_DOMAIN } from '../constants'

export default class BrowserWebView extends Component {
  getValue = url => {
    const regEx = new RegExp(PROXY_DOMAIN, 'i')
    return regEx.test(url) ? this.props.input : url
  }

  onNavigationStateChange = ({ url }) => {
    this.props.setInput(this.getValue(url))
  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.goBack.bind(this))
  }

  goBack () {
    this.props.goBack(this.webview)
    return true
  }

  goForward () {
    this.props.goForward(this.webview)
  }

  render () {
    const { url, loading } = this.props
    const _style = loading
      ? styles._webview
      : styles.webview

    return (
      <GestureView
        style={_style}
        onSwipeLeft={this.goForward.bind(this)}
        onSwipeRight={this.goBack.bind(this)}>
        <WebView
          ref={c => (this.webview = c)}
          source={{ uri: url }}
          onLoadEnd={this.props.onLoadEnd}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </GestureView>
    )
  }
}
