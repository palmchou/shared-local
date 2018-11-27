import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ShareDArticleList from './ShareDArticleList';

const styles = theme => ({

});

class SharedArticleListContainer extends React.Component {

  state = {
    // archivedListOpen: false,
  };

  render() {
    const {classes, header, articles} = this.props;
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
  articles: PropTypes.array.isRequired,
};

export default withStyles(styles)(SharedArticleListContainer);
