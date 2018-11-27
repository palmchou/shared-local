import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

});

class ShareDArticleContentProvider extends React.Component {

  state = {
    // archivedListOpen: false,
  };

  render() {
    const { classes } = this.props;
    return (
      
    );
  }
}

ShareDArticleContentProvider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareDArticleContentProvider);
