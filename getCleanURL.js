export default input => {
  return new Promise((resolve, reject) => {
    // would be handy to capture what comes afterwards?
    const match = input.match(/^([\s\S]+)\s*:\/\//)
    if (match) {
      // protocol is dat
      if (/dat/i.test(match[1])) {
        console.log('proxy goes here')
      } else {
        resolve(input)
      }
    } else {
      // assume http
      resolve(`http://${input}`)
    }
  })    
}