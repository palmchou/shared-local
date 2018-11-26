import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import PropTypes from 'prop-types';

import ShareDAppBar from "./ShareDAppBar"
import ShareDDrawer from "./ShareDDrawer"
import SharedArticleListContainer from "./SharedArticleListContainer"
import {withStyles} from "@material-ui/core/styles/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class ShareDApp extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Router>
      <div className={classes.root}>
        <ShareDAppBar/>
        <ShareDDrawer/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path="/" component={props => <SharedArticleListContainer header='All Articles' />} />
          <Route path="/recent" component={props => <SharedArticleListContainer header='Recent Articles' />} />
          <Route path="/valued" component={props => <SharedArticleListContainer header='Valued Articles' />} />
        </main>
      </div>
      </Router>
    );
  }
}

ShareDApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareDApp);
