// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import { Deck } from "spectacle";

import Slides from "./slides.js";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#e6e6e6",
    subprimary: "#07245e",
    secondary: "#1F2022",
    tertiary: "#07245e",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck theme={theme} contentWidth={1700} contentHeight={1000}>
        {Slides}
      </Deck>
    );
  }
}
