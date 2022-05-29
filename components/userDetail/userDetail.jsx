import React from 'react';
import './userDetail.css';
import { Link } from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
    };
    const promise = fetchModel(`/user/${this.props.match.params.userId}`);
    promise.then((response => {
        this.setState({userDetails: JSON.parse(response.data)});
        // this.props.callback("userDetails", this.state.userDetails.first_name + " " + this.state.userDetails.last_name);
    })).catch(function(error) {
      console.log(error);
    });
  }

  // called whenever the page refreshes
  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      const promise = fetchModel(`/user/${this.props.match.params.userId}`);
      promise.then((response => {
          this.setState({userDetails: JSON.parse(response.data)});
          // this.props.callback("userDetails", this.state.userDetails.first_name + " " + this.state.userDetails.last_name);
      })).catch(function(error) {
        console.log(error);
      });
    }
  }

  render() {
    let user = this.state.userDetails;
    if(user){
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