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
        <Link to={'/users/' + user._id}>{user.first_name + " " + user.last_name}</Link>
      </ListItem>
      )
    });

    return (
      <div>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://mui.com/components/lists/">Lists</a> and <a href="https://mui.com/components/dividers/">Dividers</a> to
          display your users like so:
        </Typography>
        <List component="nav">
          {arrayOfUserNames}
        </List>
        {/* <Typography variant="body1">
          The model comes in from window.cs142models.userListModel()
        </Typography> */}
      </div>
    );
  }
}

export default UserList;
