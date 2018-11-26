import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

});

class SharedArticleListContainer extends React.Component {

  state = {
    // archivedListOpen: false,
  };

  render() {
    const { classes } = this.props;
    return (

    );
  }
}

SharedArticleListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SharedArticleListContainer);
