// TODO: yank setState calls and use a store

import React from 'react';
import {
  WebView,
  TextInput,
  View
} from 'react-native';

import styles from './styles'
import getCleanURL from './getCleanURL'
import handleURL from './handleURL'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: null,
      url: null
    }
  }

  handleTextChange = text => this.setState({ input: text })

  setURL = input => {
    getCleanURL(input)
      .then(url => {
        handleURL(url)
          .then(_ => {
            this.setState({ url: url })
          })
          .catch(_ => {
            // TODO: support other search engines?
            this.setState({ url: `https://duckduckgo.com/?q=${input}` })
          })
    })
  }

  onSubmitEditing = () => {
    const { input } = this.state
    if (input) { this.setURL(input) }
  }

  onNavigationStateChange = state => {
    // we'll not want this when the content is proxy (dat://)
    this.setState({ url: state.url })
  }

  render() {
    const { url } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            onChangeText={this.handleTextChange}
            onSubmitEditing={this.onSubmitEditing}
            value={url}
          />
        </View>
        {url && <WebView
          ref={r => this.webview = r}
          source={{ uri: url }}
          onNavigationStateChange={this.onNavigationStateChange}
        />}
      </View>
    );
  }
}