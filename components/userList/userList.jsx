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
import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []}
  }

  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    var self = this;
    
    xhttp.onreadystatechange = function(e){
      if (xhttp.readyState === 4 && xhttp.status === 200){
        self.setState({
          posts: JSON.parse(this.response)
        });
      }
    }
    xhttp.open("get", "/user/list", true);
    xhttp.send();
  }

  render() {
    console.log(this.state.posts);
    let listOfUsers = this.state.posts;
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
