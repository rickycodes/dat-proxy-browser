import {
  PROXY_DOMAIN,
  PROXY_PORT
} from './constants'

export default input => {
  return new Promise((resolve, reject) => {
    // would be handy to capture what comes afterwards?
    const match = input.match(/^([\s\S]+)\s*:\/\//)
    if (match) {
      // protocol is dat
      if (/dat/i.test(match[1])) {
        const clean = input.replace('dat://', '')
        fetch(`http://${PROXY_DOMAIN}:${PROXY_PORT}/post/${clean}`)
          .then(res => {
            return res.json();
          })
          .then(({ url }) => {
            resolve(url)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        resolve(input)
      }
    } else {
      // assume http
      resolve(`http://${input}`)
    }
  })    
}