import React from "react";
import PropTypes from "prop-types";

import TreeRoot from "./TreeRoot";

const jsonData = require("../assets/data.json");
const data = jsonData.data.allNodes;

/**
 * Tree - React Component
 */

const Tree = () => (
  <TreeRoot
    trueRootID={data[0].id}
    trueIndex={data[0].index}
    trueMaxIndex={data[0].maxIndex}
  />
);

export default Tree;
