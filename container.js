import { connect } from 'react-redux'
import {
  setUrl,
  setDisplayUrl,
  setInput,
  setLoading
} from './actions'
import App from './components/app'

import getCleanURL from './utils/getCleanURL'
import handleURL from './utils/handleURL'
import { SEARCH } from './constants'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  setDisplayUrl: url => dispatch(setDisplayUrl(url)),
  cleanSearchUrl: url => {
    dispatch(setLoading(true))
    getCleanURL(url)
      .then(cleanUrl => {
        handleURL(cleanUrl)
          .then(_ => {
            dispatch(setUrl(cleanUrl))
            dispatch(setLoading(false))
          })
          .catch(_ => {
            dispatch(setUrl(`https://${SEARCH}?q=${url}`))
            dispatch(setLoading(false))
          })
      })
  },
  setInput: input => dispatch(setInput(input))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
