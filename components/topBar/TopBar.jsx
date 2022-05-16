import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const user = window.cs142models.userModel(this.props.match.params.userId);
    // console.log(user);
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              Liz
          </Typography>
          <Typography variant="h5" color="inherit">
              {this.props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
