import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  state = {
    photos: []
  }

  componentDidMount() {
    axios.get(`/photosOfUser/${this.props.match.params.userId}`)
      .then(res => {
        this.setState({ photos: res.data });
      })
      .catch(err => console.log(err))
  }

  render() {
    let listOfPhotos = this.state.photos;
    let arrayOfUserPhotos = listOfPhotos.map(photo => {
      var imagePath = 'images/' + photo.file_name;
      return (
        <div key={photo._id}>
          <div>Date posted: {photo.date_time}</div>
          <img src={imagePath} />
            <div>
              {photo.comments.map(comment => {
                var linkToUser = "/users/" + comment.user_id;
                var userName = comment.user.first_name;
                return (
                  <div key={comment._id}>
                    {comment.date_time}<br></br>
                    <Link to={linkToUser}>{userName}: </Link>{comment.comment}
                  </div>
                );
              })}
            </div>
        </div>
      );
    });

    return (
      <Typography component={'span'} variant="body1">
        {arrayOfUserPhotos}
      </Typography>
    );
  }
}

export default UserPhotos;
