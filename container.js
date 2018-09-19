import { connect } from 'react-redux'
import {
  setUrl,
  setDisplayUrl,
  setInput,
  toggleLoading
} from './actions'
import App from './components/app'

import getCleanURL from './utils/getCleanURL'
import handleURL from './utils/handleURL'
import { SEARCH } from './constants'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  setDisplayUrl: url => dispatch(setDisplayUrl(url)),
  cleanSearchUrl: url => {
    dispatch(toggleLoading())
    getCleanURL(url)
      .then(cleanUrl => {
        handleURL(cleanUrl)
          .then(_ => {
            dispatch(setUrl(cleanUrl))
            dispatch(toggleLoading())
          })
          .catch(_ => {
            dispatch(setUrl(`https://${SEARCH}?q=${url}`))
            dispatch(toggleLoading())
          })
    })
  },
  setInput: input => dispatch(setInput(input))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)