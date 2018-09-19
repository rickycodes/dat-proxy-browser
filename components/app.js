import React, { Component } from 'react';
import {
  WebView,
  Text,
  TextInput,
  View
} from 'react-native';

import styles from '../styles'
import OmniSearch from './omniSearch';

export default class App extends Component {
  onNavigationStateChange = state => {
    this.props.setDisplayUrl(state.url)
  }

  render() {
    const { url, display_url, loading } = this.props

    return (
      <View style={styles.container}>
        <OmniSearch {...this.props} />
        {url && !loading && <WebView
          ref={r => this.webview = r}
          source={{ uri: url }}
          onNavigationStateChange={this.onNavigationStateChange}
        />}
        {loading && <Text style={styles.placeholder}>Loading...</Text>}
      </View>
    );
  }
}