/* global fetch */
export default url => {
  return new Promise((resolve, reject) => {
    /^http/.test(url) ? fetch(url)
      .then(res => {
        if (res.ok) {
          resolve()
        }
        return res.blob()
      })
      .then(blob => {
        // console.log(blob)
      })
      .catch(error => {
        reject(error)
      }) : reject(new Error('Unknown protocol'))
  })
}
