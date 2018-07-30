import React from "react";
import PropTypes from "prop-types";

import TreeRoot from "./TreeRoot";

import { getRootData } from "./data.js";

/**
 * Tree - React Component
 */

const Tree = () => {
  const data = getRootData();

  return (
    <TreeRoot
      trueRootID={data.id}
      trueIndex={data.index}
      trueMaxIndex={data.maxIndex}
    />
  );
};

export default Tree;
