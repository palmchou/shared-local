import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import PropTypes from 'prop-types';

import ShareDAppBar from "./ShareDAppBar"
import ShareDDrawer from "./ShareDDrawer"
import SharedArticleListContainer from "./SharedArticleListContainer"
import ShareDComposePage from "./ShareDComposePage"
import ShareDAuthorRegPage from "./ShareDAuthorRegPage"
import ShareDArticleDetailPage from "./ShareDArticleDetailPage"
import {withStyles} from "@material-ui/core/styles/index";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

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


const articles = [
  {
    title: "This is the title of the test article specified by prop",
    author: "Test Bot",
    brief: "Nothing here.",
    hashID: "1-1",
  },
  {
    title: "Hello World",
    author: "Test Bot II",
    brief: "Nothing here either.",
    hashID: "2-1",
  },
  {
    title: "How to create multiple page app using react",
    author: "Shuai Zhou",
    brief: "I have created a single page web app using react js. I have used webpack to create bundle of all components. But now I want to create many other pages. Most of pages are API call related.",
    hashID: "3-1",
  },
];

class ShareDApp extends React.Component {
  constructor(props) {
    super(props);
    // articles.reduce((map, a) => {map[a.hashID] = a});
    this.state = {
      // articleMap: {
      //   "abcdefafafdaf": articleA
      // },
      articleMap: articles.reduce((map, a) => {map[a.hashID] = a; return map}, {})
    };
  }


  lookUpArticleByID = (aID) => {
    return this.state.articleMap[aID]
  };

  render() {
    const {classes} = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <ShareDAppBar/>
          <ShareDDrawer/>
          <main className={classes.content}>
            <div className={classes.toolbar}/>

            <Route exact path="/" component={props => <SharedArticleListContainer header='All Articles' articles={articles}/> }/>
            <Route path="/recent" component={props => <SharedArticleListContainer header='Recent Articles' articles={articles}/>}/>
            <Route path="/valued" component={props => <SharedArticleListContainer header='Valued Articles' articles={articles}/>}/>
            <Route path="/compose" component={props => <ShareDComposePage/>}/>
            <Route path="/register" component={props => <ShareDAuthorRegPage/>}/>
            <Route path="/r/:hashID"
                   component={props => <ShareDArticleDetailPage {...props} articleMap={this.lookUpArticleByID}/>}/>
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
