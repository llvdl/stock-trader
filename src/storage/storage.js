import 'whatwg-fetch'
import { checkStatus, parseJson } from './storage-helpers'

export default {
  save(data) {
    return fetch('http://localhost:8081/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(checkStatus)
  },
  load() {
    return fetch('http://localhost:8081/api', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(checkStatus)
      .then(parseJson)
  }
}
