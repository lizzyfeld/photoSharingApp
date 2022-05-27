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
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar style={{justifyContent: 'space-between'}}>
          <Typography variant="h5" color="inherit">
              Liz Feldman
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
