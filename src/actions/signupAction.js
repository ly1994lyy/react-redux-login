import axios from 'axios'

export const userSignupRequest = (userData)=>{
  return dispatch => {
    return axios.post("http://localhost:3001/api/user",userData)
  }
}
