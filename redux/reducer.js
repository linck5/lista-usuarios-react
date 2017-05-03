
let reducer = function(state, action){
  switch(action.type){
      case 'UPDATE_USERS':
        return Object.assign({}, state, {users: action.updatedUsers})

    default: return state;
  }
}

export default reducer
