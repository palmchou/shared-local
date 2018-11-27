import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
  },
  grow: {
    flexGrow: 1,
  },
  composeBtn: {
    marginRight: '24px'
  },
  appBarBtnIcon: {
    marginRight: theme.spacing.unit,
  },
});

function ShareDAppBar(props) {
  const {classes} = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          ShareD - Distributed Text Content Sharing Platform
        </Typography>
        <Button color="secondary" variant="contained"
                className={classes.composeBtn}
                component={Link} to="/register">
          <AccountCircleIcon className={classes.appBarBtnIcon}/>Register
        </Button>
        <Button color="secondary" variant="contained"
                className={classes.composeBtn}
                component={Link} to="/compose">
          <CreateIcon className={classes.appBarBtnIcon}/>Compose
        </Button>
      </Toolbar>
    </AppBar>
  );
}

ShareDAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareDAppBar);
