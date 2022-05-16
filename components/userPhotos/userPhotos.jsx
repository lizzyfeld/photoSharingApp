import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import { ListItem }from '@material-ui/core';
import { Link } from 'react-router-dom';


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.setName(this.props.match.params.userId, true);
  }

  render() {
    let userID = this.props.match.params.userId;
    let listOfPhotos = window.cs142models.photoOfUserModel(userID);
    let arrayOfUserPhotos = listOfPhotos.map(photo => {
      var imagePath = 'images/' + photo.file_name;
      const hasComments = photo.comments !== undefined && photo.comments.length > 0;
        return(
          <div key={photo._id}>
            <div>Date posted: {photo.date_time}</div>
            <img src={imagePath}/>
            {hasComments &&
              <div>
                {photo.comments.map(comment => {
                  var linkToUser = "http://localhost:3000/photo-share.html#/users/" + comment.user._id;
                  var userName = comment.user.first_name;
                  return (
                    <div key={comment._id}>
                      {comment.date_time}<br></br>
                      <Link to={linkToUser}>{userName}: </Link>{comment.comment}
                    </div>
                )})}
              </div>
            }
          </div>
        )
    });

    return (
      <Typography component={'span'} variant="body1">
        {arrayOfUserPhotos}
      </Typography>

    );
  }
}

export default UserPhotos;
