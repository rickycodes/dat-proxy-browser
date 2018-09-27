import React, { Component } from 'react'
import {
  TextInput,
  View
} from 'react-native'

import styles from '../styles'

export default class OmniSearch extends Component {
  onSubmitEditing = _ => {
    this.props.cleanSearchUrl(this.props.input)
  }

  render () {
    return (
      <View style={styles.toolbar}>
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          onChangeText={this.props.setInput}
          onSubmitEditing={this.onSubmitEditing}
          value={this.props.input}
        />
      </View>
    )
  }
}
