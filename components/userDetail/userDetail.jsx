import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userDetail.css';
import { Link } from 'react-router-dom';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
    }
  }

  // called whenever the page refreshes
  componentDidUpdate() {
    var xhttp = new XMLHttpRequest();
    var self = this;
    
    xhttp.onreadystatechange = function(e){
      if (xhttp.readyState === 4 && xhttp.status === 200){
        self.setState({
          posts: JSON.parse(this.response)
        });
      }
    }
    xhttp.open("get", "/user/" + this.props.match.params.userId, true);
    xhttp.send();
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
    xhttp.open("get", "/user/" + this.props.match.params.userId, true);
    xhttp.send();
  }

  render() {
    let user = this.state.posts;
    return (
      <div>
        <h1>{user.first_name} {user.last_name}</h1>
        <h2>Location: {user.location}</h2>
        <h2>Description: {user.description}</h2>
        <h2>Occupation: {user.occupation}</h2>
        <Link to={'/photos/' + user._id}>{user.first_name + " " + user.last_name + "'s photos"}</Link>
      </div>
    );
  }
}

export default UserDetail;