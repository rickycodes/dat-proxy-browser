import { connect } from 'react-redux'
import {
  setUrl,
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
  onLoadEnd: _ => dispatch(setLoading(false)),
  goBack: webview => dispatch(goBack(webview)),
  goForward: webview => dispatch(goForward(webview)),
  cleanSearchUrl: url => {
    dispatch(setLoading(true))
    if (last) last.unsubscribe()
    const source = getCleanURL(url)
    last = source.subscribe({
      next: cleanUrl => {
        handleURL(cleanUrl)
          .then(_ => dispatch(setUrl(cleanUrl)))
          .catch(_ => dispatch(setUrl(`https://${SEARCH}?q=${url}`)))
      }
    })
  },
  setInput: input => dispatch(setInput(input))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
