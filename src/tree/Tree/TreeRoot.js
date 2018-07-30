import React, { Component } from "react";
import PropTypes from "prop-types";

import { getYScale } from "./selectors.js";

import TreeNode from "./TreeNode";

import config from "./config.js";
/**
 * Tree Root
 */

class TreeRoot extends Component {
  static propTypes = {
    trueRootID: PropTypes.string.isRequired,
    trueIndex: PropTypes.number.isRequired,
    trueMaxIndex: PropTypes.number.isRequired

    //analysis: PropTypes.string.isRequired,
    //setTreeRoot: PropTypes.func.isRequired,

    //currRootID: PropTypes.string,
    //yScale: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      currRootIndex: props.trueIndex,
      currRootMax: props.trueMaxIndex,
      height: config["height"]
    };
  }

  render() {
    const { currRootIndex, currRootMax, height } = this.state;
    const yScale = getYScale();
    const indPerPx = getIndicesPerPixel(currRootMax, height);
    return (
      <svg width={config["width"]} height={height}>
        <TreeNode
          index={currRootIndex}
          isRoot
          yScale={yScale}
          indPerPx={indPerPx}
        />
      </svg>
    );
  }
}

export default TreeRoot;
