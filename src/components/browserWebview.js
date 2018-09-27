import React, { Component } from 'react'
import {
  WebView,
  BackHandler
} from 'react-native'

import GestureView from 'react-native-gesture-view'
import styles from '../styles'

export default class BrowserWebView extends Component {
  onNavigationStateChange = state => {
    this.props.setDisplayUrl(state.url)
  }

  componentWillMount () {
    // this doesn't appear to work
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
