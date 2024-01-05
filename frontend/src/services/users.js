import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/bog/users'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const remove = id => {
  console.log(`${baseUrl}/${id}`)
  return axios.delete(`${baseUrl}/${id}`)
}

// eslint-disable-next-line
export default { 
  getAll: getAll,
  create: create,
  remove: remove
}