import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/bog/users'

const getAll = () => {
  return axios
    .get(baseUrl)
    .catch(error => console.error('Error fetching users:', error))
}

const create = newUser => {
  return axios
    .post(baseUrl, newUser)
    .catch((error) => console.error('Error adding new user:', error));
}

const remove = id => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .catch(error => console.error('Error deleting user:', error))
}

const update = (id, updatedUser) => {
  return axios.put(`${baseUrl}/${id}`, updatedUser)
}
// eslint-disable-next-line
export default { 
  getAll: getAll,
  create: create,
  remove: remove,
  update: update
}