import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ShareDMDEditorContainer from "./ShareDMDEditorContainer"
import Markdown from "./markdown"
import textMarkdown from './text.md';

const styles = theme => ({
  content: {
    padding: "20px"
  }
});

class ShareDArticleDetailPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      contentMD: "",
      articleObj: props.articleMap(props.match.params.hashID)
    };
    this.handleClick();
  }

  handleClick = () => {
    fetch(textMarkdown)
      .then((r) => r.text())
      .then(text => {
        console.log(text);
        this.setState({
          contentMD: text
        })
      })
  };

  render() {
    const {classes} = this.props;
    const {articleObj} = this.state;
    return (
      <React.Fragment>
        <Typography variant="h4" color="inherit" gutterBottom>
          {articleObj.title}
        </Typography>
        <Typography color="inherit" gutterBottom variant="caption" paragraph>
          {"April 1, 2020 by " + articleObj.author}
        </Typography>
        <Typography color="inherit" gutterBottom variant="body2" paragraph>
          <i>{articleObj.brief}</i>
        </Typography>

        <Paper>
          <Markdown className={classes.content}>{this.state.contentMD}</Markdown>
        </Paper>
      </React.Fragment>
    );
  }
}

ShareDArticleDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareDArticleDetailPage);
