import React, { Component } from 'react'
import UserList from './UserList'
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

class PaginatedUsers extends Component {

  handlePageChange(page){
    this.context.router.history.push('/'+page);
    this.props.actions.loadUsers(page)

  }

  componentDidMount() {
    this.props.actions.loadUsers(this.props.page);
  }

  render () {
    return (
        <div>
          <UserList actions={this.props.actions} users={this.props.users} />
          {
            this.props.users.data !== undefined &&

                <div className="text-center">
                  <Pagination
                    activePage={Number(this.props.page)}
                    itemsCountPerPage={this.props.users.per_page}
                    totalItemsCount={this.props.users.total}
                    pageRangeDisplayed={11}
                    onChange={this.handlePageChange.bind(this)}
                  />
                </div>
          }
        </div>
    )
  }
}

PaginatedUsers.contextTypes = {
  router: PropTypes.object
}


export default PaginatedUsers
