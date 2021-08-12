import axios from 'axios'

function getProducts(props) {
  let url = 'http://localhost:4500/api/v1/products'
  props.page = props.page === 1 ? null : props.page
  let params = []

  for (const prop in props) {
    if (props[prop]) params.push(`${prop}=${props[prop]}`)
  }

  if (params.length) {
    url += '?'
    url += params.join('&')
  }

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      timeout: 5000,
      url: url
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { getProducts }
