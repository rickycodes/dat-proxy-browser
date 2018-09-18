import React, { Component } from 'react';
import {
  WebView,
  Text,
  TextInput,
  View
} from 'react-native';

// these need to go elsewhere
import styles from '../styles'

export default class App extends Component {
  onSubmitEditing = _ => {
    this.props.setUrl(this.props.input, this.props.loading)
  }

  onNavigationStateChange = state => {
    // we'll not want this when the content is proxy (dat://)
    this.setState({ url: state.url })
  }

  // we'll want to make the proxy host (and maybe IP?)
  getValue = url => /localhost/.test(url) ? this.props.input : url

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