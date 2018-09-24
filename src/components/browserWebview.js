import React, { Component } from 'react'
import {
  WebView
} from 'react-native'

import GestureView from 'react-native-gesture-view'
import styles from '../styles'

export default class BrowserWebView extends Component {
  onNavigationStateChange = state => {
    // this.props.setDisplayUrl(state.url)
  }

  goBack () {
    this.props.goBack(this.webview)
  }

  goForward () {
    this.props.goForward(this.webview)
  }

  render () {
    const { url } = this.props

    return (
      <GestureView
        style={styles.container}
        onSwipeLeft={this.goForward.bind(this)}
        onSwipeRight={this.goBack.bind(this)}>
        <WebView
          ref={c => (this.webview = c)}
          source={{ uri: url }}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </GestureView>
    )
  }
}
