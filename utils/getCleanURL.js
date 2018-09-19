/* global fetch */
import {
  PROXY_DOMAIN,
  PROXY_PORT
} from '../constants'

import { Observable } from 'rxjs'

export default input => {
  return Observable.create(observer => {
    const end = url => {
      observer.next(url)
      observer.complete()
    }
    // would be handy to capture what comes afterwards?
    const match = input.match(/^([\s\S]+)\s*:\/\//)
    if (match) {
      // protocol is dat
      if (/dat/i.test(match[1])) {
        const clean = input.replace('dat://', '')
        fetch(`http://${PROXY_DOMAIN}:${PROXY_PORT}/post/${clean}`)
          .then(res => {
            return res.json()
          })
          .then(({ url }) => {
            end(url)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        end(input)
      }
    } else {
      // assume http
      end(`http://${input}`)
    }
  })
}
