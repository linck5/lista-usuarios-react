import axios from 'axios';

let usersUrl = 'https://reqres.in/api/users'

let actions = {

  loadUsers: function(page){
    return (dispatch) => {
      return axios.get(`${usersUrl}?page=${page}`)
      .then(res => {
        console.log('the data > ')
        console.log(res.data)
        dispatch(actions.updateUsers(res.data));
      })
    }
  },

  updateUsers: function(updatedUsers){
    return {
      type: 'UPDATE_USERS',
      updatedUsers: updatedUsers
    }
  }
}

export default actions;
