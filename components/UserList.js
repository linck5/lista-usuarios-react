import React, { Component } from 'react'
import UserItem from './UserItem'
import { withRouter } from 'react-router';


class UserList extends Component {

  render () {
    return (
      <div className="row">
        {
          this.props.users.data ?

            this.props.users.data.map(user => {
              return (
                <div className="col-md-4">
                  <UserItem user={user} key={user.id}/>
                </div>
              )
            })
            :
            <p>Não há usuários para mostrar</p>
        }
      </div>

    )
  }
}


export default UserList
