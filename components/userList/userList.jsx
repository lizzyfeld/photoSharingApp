import React from 'react';
import {
  List,
  ListItem,
}
from '@material-ui/core';
import './userList.css';
import fetchModel from '../../lib/fetchModelData';
import axios from 'axios'

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    
  }
  componentDidUpdate() {
    axios.get('/user/list')
      .then(res => console.log(res))
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
