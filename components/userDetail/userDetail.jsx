import React from 'react';
import './userDetail.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
    };
  }

  fetchUser() {
    axios.get(`/user/${this.props.match.params.userId}`)
      .then(res => this.setState({ userDetails: res.data }))
      .catch(err => console.log(err))
  }

  // called whenever the page refreshes
  componentDidUpdate = prevProps => this.props.match.params.userId !== prevProps.match.params.userId && this.fetchUser();
  componentDidMount = this.fetchUser;

  render() {
    let user = this.state.userDetails;
    if (user) {
      return (
        <div>
          <h1>{user.userfirst_name} {user.last_name}</h1>
          <h2>Location: {user.location}</h2>
          <h2>Description: {user.description}</h2>
          <h2>Occupation: {user.occupation}</h2>
          <Link to={'/photos/' + user._id}>{user.first_name + " " + user.last_name + "'s photos"}</Link>
        </div>
      );
    } else {
      return (
        <div>User not found</div>
      );
    }
  }
}

export default UserDetail;