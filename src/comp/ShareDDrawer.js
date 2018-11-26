import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import UpdateIcon from '@material-ui/icons/Update';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ShareDDrawer extends React.Component {

  state = {
    archivedListOpen: false,
  };

  handleArchivedListClick = () => {
    this.setState(state => ({archivedListOpen: !state.archivedListOpen}));
  };

  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}/>
        <List>
          <ListItem button key='drawer-item-home' component={Link} to='/'>
            <ListItemIcon><HomeIcon color="action"/></ListItemIcon>
            <ListItemText primary='All'/>
          </ListItem>
          <ListItem button key='drawer-item-recent' component={Link} to='/recent'>
            <ListItemIcon><UpdateIcon/></ListItemIcon>
            <ListItemText primary='Recent'/>
          </ListItem>
          <ListItem button key='drawer-item-valued' component={Link} to='/valued'>
            <ListItemIcon><ThumbUpIcon/></ListItemIcon>
            <ListItemText primary='Valued'/>
          </ListItem>
          <ListItem button onClick={this.handleArchivedListClick}>
            <ListItemIcon>
              <LibraryBooksIcon/>
            </ListItemIcon>
            <ListItemText inset primary="Archive"/>
            {this.state.archivedListOpen ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>
          <Collapse in={this.state.archivedListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['11', '10', '09'].map((month) => (
                <ListItem button className={classes.nested} key={'drawer-item-archive-2018-' + month}>
                  <ListItemText inset primary={"2018 - " + month}/>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
        <Divider/>
        <List>
          <ListItem button key='drawer-item-settings' component={Link} to='/settings'>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary='Settings'/>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}


ShareDDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export {drawerWidth};
export default withStyles(styles)(ShareDDrawer);
