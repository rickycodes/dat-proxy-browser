import React, { Component } from 'react'
import {
  TextInput,
  View
} from 'react-native'

import { PROXY_DOMAIN } from '../constants'
import styles from '../styles'

class OmniSearch extends Component {
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
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          onChangeText={this.props.setInput}
          onSubmitEditing={this.onSubmitEditing}
          value={this.getValue(display_url)}
        />
      </View>
    )
  }
}

export default OmniSearch
