import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
  }
});

function ShareDAppBar(props) {
  const {classes} = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          ShareD - Distributed Text Content Sharing Platform
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

ShareDAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareDAppBar);
