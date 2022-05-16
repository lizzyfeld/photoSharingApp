import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';
import { Link } from 'react-router-dom';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listOfUsers = window.cs142models.userListModel();
    let arrayOfUserNames = listOfUsers.map(user => {
      return(
      <ListItem key={user._id}>
        <Link onClick={() => this.props.setName(user._id)} to={'/users/' + user._id}>{user.first_name + " " + user.last_name}</Link>
      </ListItem>
      )
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
