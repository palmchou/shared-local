import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

const styles = theme => ({});

class SharedMDEditorContainer extends React.Component {

  state = {
    // archivedListOpen: false,
  };

  handleChange = (p) => {
    console.log(p);
  };

  render() {
    const {classes} = this.props;
    return (
      <SimpleMDE
        onChange={this.handleChange}
        options={{
          toolbar: ["bold", "italic", "heading", "strikethrough", "|",
                    "quote", "unordered-list", "ordered-list", "|",
                    "image", "table", "|",
                    "preview", "guide"
          ],
          shortcuts: {
            "toggleSideBySide": null, // alter the shortcut for toggleOrderedList
            "toggleFullScreen": null, // unbind Ctrl-Alt-C
          }
        }}
      />
    );
  }
}

SharedMDEditorContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SharedMDEditorContainer);
