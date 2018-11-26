import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import deepOrange from '@material-ui/core/colors/deepOrange';

import ShareDApp from "./comp/ShareDApp"
// import CPCMain from "./layout/CPCMain"

const theme = createMuiTheme({
    palette: {
      primary: deepOrange,
      secondary: red,
    },
    typography: {
      useNextVariants: true,
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <MuiThemeProvider theme={theme}>
          <ShareDApp/>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}