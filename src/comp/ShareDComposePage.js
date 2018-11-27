import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareDMDEditorContainer from "./ShareDMDEditorContainer"

const styles = theme => ({
  editorLabel: {
    margin: "12px 0 8px",
  },
  submitButton: {

  }
});

class ShareDComposePage extends React.Component {

  state = {
    // archivedListOpen: false,
  };

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" color="inherit">
          Compose Your Article
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="title"
            label="Title"
            helperText="The length of title is limited to 120 characters."
            fullWidth
            margin="normal"
            inputProps={{maxLength: 120}}
          />
          <TextField
            id="briefIntro"
            label="Brief Introduction"
            multiline
            rowsMax="4"
            fullWidth
            margin="normal"
            helperText="The length of brief introduction is limited to 360 characters."
            inputProps={{maxLength: 360}}
          />
          <div className={classes.editorLabel}>
          <FormLabel>Main Content</FormLabel>
          </div>
          <ShareDMDEditorContainer/>
          <Button variant="contained" color="secondary" className={classes.submitButton}>
            Submit
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

ShareDComposePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareDComposePage);
