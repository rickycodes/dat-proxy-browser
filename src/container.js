import { connect } from 'react-redux'
import {
  setUrl,
  setDisplayUrl,
  setInput,
  setLoading,
  goBack,
  goForward
} from './actions'
import App from './components/app'

import getCleanURL from './utils/getCleanURL'
import handleURL from './utils/handleURL'
import { SEARCH } from './constants'

let last

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  goBack: webview => dispatch(goBack(webview)),
  goForward: webview => dispatch(goForward(webview)),
  setDisplayUrl: url => dispatch(setDisplayUrl(url)),
  cleanSearchUrl: url => {
    dispatch(setLoading(true))
    if (last) last.unsubscribe()
    const source = getCleanURL(url)
    last = source.subscribe({
      next: cleanUrl => {
        handleURL(cleanUrl)
          .then(_ => {
            dispatch(setUrl(cleanUrl))
            dispatch(setLoading(false))
          })
          .catch(_ => {
            dispatch(setUrl(`https://${SEARCH}?q=${url}`))
            dispatch(setLoading(false))
          })
      }
    })
  },
  setInput: input => dispatch(setInput(input))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
