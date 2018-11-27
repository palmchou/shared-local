import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareDMDEditorContainer from "./ShareDMDEditorContainer"

const styles = theme => ({
  editorLabel: {
    margin: "12px 0 8px",
  },
  submitButton: {

  }
});

class ShareDAuthorRegPage extends React.Component {

  state = {
    // archivedListOpen: false,
  };

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" color="inherit">
          Register as Author
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            helperText="The length of name is limited to 20 characters."
            fullWidth
            margin="normal"
            inputProps={{maxLength: 20}}
          />
          {/*<TextField*/}
            {/*id="briefIntro"*/}
            {/*label="Brief Introduction"*/}
            {/*multiline*/}
            {/*rowsMax="4"*/}
            {/*fullWidth*/}
            {/*margin="normal"*/}
            {/*helperText="The length of brief introduction is limited to 360 characters."*/}
            {/*inputProps={{maxLength: 360}}*/}
          {/*/>*/}
          <Button variant="contained" color="secondary" className={classes.submitButton}>
            Submit
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

ShareDAuthorRegPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareDAuthorRegPage);
