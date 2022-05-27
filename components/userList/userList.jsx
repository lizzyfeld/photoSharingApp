import React from 'react';
import {
  List,
  ListItem,
}
from '@material-ui/core';
import './userList.css';
import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    const promise = fetchModel("/user/list");
    promise.then((response => {
      // console.log('hello' + response.data);
      this.setState({users: JSON.parse(response.data)});
    })).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    let listOfUsers = this.state.users;
    // console.log('listOfUsers: ' + listOfUsers);
    let arrayOfUserNames = listOfUsers.map(user => {
      return(
      <a href={'#/users/' + user._id} key={user._id}>
        <ListItem onClick={() => this.props.setName(user._id)}>
          {user.first_name + " " + user.last_name}
        </ListItem>
      </a>
      );
    });

    return (
      <div>
        <List component="nav">
          {arrayOfUserNames}
        </List>
      </div>
    );
  }
}

export default UserList;
