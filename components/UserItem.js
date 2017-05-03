import React, { Component } from 'react'

class UserItem extends Component {

  formatName(firstName, lastName) {

    firstName = firstName.toLowerCase().replace(/^\w|\s\w/g, firstLetter => {
      return firstLetter.toUpperCase();
    });
    if(lastName.length > 0){
      lastName = lastName[0].toUpperCase() + '.'
    }
    return firstName + ' ' + lastName
  }

  render () {

    let flexContainer = {
      display: "flex",
      "align-items": "center"
    }

    return (
      <div className="well" style={flexContainer}>

        <div style={{flex: 1}}>
          <img src={this.props.user.avatar} className="img-rounded"/>
        </div>

        <div style={{flex: 1}}>
          <p><strong>Id:</strong> {this.props.user.id}</p>
          <p><strong>Nome:</strong> {this.formatName(this.props.user.first_name, this.props.user.last_name)}</p>
        </div>

      </div>
    )
  }

}

export default UserItem
