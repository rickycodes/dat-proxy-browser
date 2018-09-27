import React from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from '../styles'
import OmniSearch from './omniSearch'
import BrowserWebView from './browserWebview'

export default (props) => {
  const { url, loading } = props
  return (
    <View style={styles.bg}>
      <OmniSearch {...props} />
      {url && <BrowserWebView {...props} />}
      {loading && <Text style={styles.placeholder}>Loading...</Text>}
    </View>
  )
}
