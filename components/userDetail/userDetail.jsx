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
  }

  // called whenever the page refreshes
  componentDidMount() {
    this.props.setName(this.props.match.params.userId)
  }

  render() {
    let user = window.cs142models.userModel(this.props.match.params.userId);
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