import React, { Component } from 'react';
import {
  WebView,
  Text,
  TextInput,
  View
} from 'react-native';

// these need to go elsewhere
import styles from '../styles'
import PROXY_DOMAIN from '../constants'

export default class App extends Component {
  onSubmitEditing = _ => {
    this.props.cleanSearchUrl(this.props.input)
  }

  onNavigationStateChange = state => {
    // this.props.setUrl(state.url)
  }

  getValue = url => (new RegExp(PROXY_DOMAIN, 'i')).test(url)
    ? this.props.input
    : url

  render() {
    const { url, loading } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            onChangeText={this.props.setInput}
            onSubmitEditing={this.onSubmitEditing}
            value={this.getValue(url)}
          />
        </View>
        {url && !loading && <WebView
          ref={r => this.webview = r}
          source={{ uri: url }}
          // onNavigationStateChange={this.onNavigationStateChange}
        />}
        {loading && <Text style={styles.placeholder}>Loading...</Text>}
      </View>
    );
  }
}