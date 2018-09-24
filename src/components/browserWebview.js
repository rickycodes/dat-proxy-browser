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

  onSwipeLeft () {
    console.log('Go Forward')
    // console.log(this)
  }

  onSwipeRight () {
    console.log('Go Back!')
    this.webview.goBack()
  }

  render () {
    const { url } = this.props

    return (
      <GestureView
        style={styles.container}
        onSwipeLeft={this.onSwipeLeft.bind(this)}
        onSwipeRight={this.onSwipeRight.bind(this)}>
        <WebView
          ref={c => (this.webview = c)}
          source={{ uri: url }}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </GestureView>
    )
  }
}
