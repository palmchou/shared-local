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
    name: "",
    email: "",
  };

  handleAuthorRegister = () => {
    console.log(this.state.name);
    console.log(this.state.email);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
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
            value={this.state.name}
            inputProps={{maxLength: 20}}
            onChange={this.handleChange("name")}
          />
          <TextField
            id="email"
            label="E-mail"
            fullWidth
            margin="normal"
            value={this.state.email}
            helperText="You can set an email address if you like."
            inputProps={{maxLength: 30}}
            onChange={this.handleChange("email")}
            autoComplete="email"
            type="email"
          />
          <Button variant="contained" color="secondary" className={classes.submitButton} onClick={this.handleAuthorRegister} >
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
