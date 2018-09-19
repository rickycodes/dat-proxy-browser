import { connect } from 'react-redux'
import { setUrl, setInput, toggleLoading } from './actions'
import App from './components/app'

import getCleanURL from './getCleanURL'
import handleURL from './handleURL'
import { SEARCH } from './constants'
console.log(SEARCH)

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  setUrl: url => dispatch(setUrl(url)),
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