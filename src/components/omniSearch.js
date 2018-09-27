import React, { Component } from 'react'
import {
  TextInput,
  View
} from 'react-native'

import { PROXY_DOMAIN } from '../constants'
import styles from '../styles'

export default class OmniSearch extends Component {
  // this doesn't appear to work correctly on android?
  getValue = url => {
    const regEx = new RegExp(PROXY_DOMAIN, 'i')
    return regEx.test(url) ? this.props.input : url
  }

  onSubmitEditing = _ => {
    this.props.cleanSearchUrl(this.props.input)
  }

  render () {
    const { display_url } = this.props // eslint-disable-line

    return (
      <View style={styles.toolbar}>
        <TextInput
          // this is weird?
          underlineColorAndroid='rgba(0,0,0,0)'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          onChangeText={this.props.setInput}
          onSubmitEditing={this.onSubmitEditing}
          // value={this.getValue(display_url)}
        />
      </View>
    )
  }
}
