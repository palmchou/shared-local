import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ShareDArticleList from './ShareDArticleList';

const styles = theme => ({

});

const articles = [
  {
    title: "This is the title of the test article specified by prop",
    author: "Test Bot",
    brief: "Nothing here.",
  },
  {
    title: "Hello World",
    author: "Test Bot II",
    brief: "Nothing here either.",
  },
  {
    title: "How to create multiple page app using react",
    author: "Shuai Zhou",
    brief: "I have created a single page web app using react js. I have used webpack to create bundle of all components. But now I want to create many other pages. Most of pages are API call related.",
  },
];

class SharedArticleListContainer extends React.Component {

  state = {
    // archivedListOpen: false,
  };

  render() {
    const {classes, header} = this.props;
    return (
      <div>
        <Typography variant="h6" color="inherit">
          {header}
        </Typography>
        <ShareDArticleList articles={articles}/>
      </div>
    );
  }
}

SharedArticleListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
};

export default withStyles(styles)(SharedArticleListContainer);
