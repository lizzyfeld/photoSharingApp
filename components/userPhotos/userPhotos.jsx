import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import { Link } from 'react-router-dom';


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []}
  }

  componentDidMount() {
    this.props.setName(this.props.match.params.userId, true);
    var xhttp = new XMLHttpRequest();
    var self = this;
    
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState === 4 && xhttp.status === 200){
        self.setState({
          posts: JSON.parse(this.response)
        });
      }
    };
    xhttp.open("get", "/photosOfUser/" + this.props.match.params.userId, true);
    xhttp.send();
  }

  render() {
    let listOfPhotos = this.state.posts;
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
                  var linkToUser = "/users/" + comment.user._id;
                  var userName = comment.user.first_name;
                  return (
                    <div key={comment._id}>
                      {comment.date_time}<br></br>
                      <Link to={linkToUser}>{userName}: </Link>{comment.comment}
                    </div>
                );})};
              </div>}
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
