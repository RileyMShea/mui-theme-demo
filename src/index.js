import React from "react";
import ReactDOM from "react-dom";
import deepOrange from "@material-ui/core/colors/deepOrange";
import indigo from "@material-ui/core/colors/indigo";
import CssBaseline from "@material-ui/core/CssBaseline";

import Demo from "./demo";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

let themeA = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      // default:indigo[900]
      default: "#000041",
    },
  },
  overrides: {
    MuiGrid: {
      root: {
        border: "1px solid black",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: "0px",
      },
    },

    MuiTypography: {
      root: {
        fontFamily: "Arial",
      },
      h1: {
        fontWeight: 800,
        fontFamily: "Muli",
        fontStyle: "bold",
      },
    },
  },
  status: {
    danger: deepOrange[500],
  },
  font: {
    special: "Muli",
  },
});
themeA = responsiveFontSizes(themeA);

ReactDOM.render(
  <ThemeProvider theme={themeA}>
    <CssBaseline />
    <Demo />
  </ThemeProvider>,
  document.querySelector("#root"),
);
