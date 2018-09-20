import React, { Component } from 'react'
import {
  WebView
} from 'react-native'

export default class BrowserWebView extends Component {
  onNavigationStateChange = state => {
    this.props.setDisplayUrl(state.url)
  }

  render () {
    const { url } = this.props

    return (
      <WebView
        ref={r => (this.webview = r)}
        source={{ uri: url }}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    )
  }
}
