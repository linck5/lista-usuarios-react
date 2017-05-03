import React, { Component } from 'react'
import PaginatedUsers from './PaginatedUsers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {

  render () {

    let titleStyle = {
      "text-align": "center",
      "margin": "80px"
    }

    return (
      <Router>
        <div className="container">

          <h1 style={titleStyle}>Usuários</h1>

          <Route exact path="/" render={() => (
            <PaginatedUsers actions={this.props.actions} users={this.props.users} page={1}/>
          )}/>
          <Route path="/:page" render={({match}) => (
            <PaginatedUsers actions={this.props.actions} users={this.props.users} page={match.params.page}/>
          )}/>

        </div>
      </Router>
    )
  }
}


function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
