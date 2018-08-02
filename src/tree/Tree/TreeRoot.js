import React, { Component } from "react";
import PropTypes from "prop-types";

import { getYScale, getIndicesPerPixel } from "./selectors.js";

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
      rootPath: [
        {
          index: props.trueIndex,
          maxIndex: props.trueMaxIndex
        }
      ]
    };
  }

  render() {
    const { height } = this.props;
    const { rootPath } = this.state;
    const { index, maxIndex } = rootPath[0];
    const numNodes = maxIndex - index + 1;
    const indPerPx = getIndicesPerPixel(numNodes, height);
    const yScale = getYScale(index, maxIndex, height);

    const zoomOut = () =>
      this.setState(prevState => {
        /*eslint-disable no-unused-vars*/
        const [firstPath, ...restPath] = prevState.rootPath;
        return restPath.length === 0
          ? { rootPath: prevState.rootPath }
          : { rootPath: restPath };
      });

    const zoomIn = (index, maxIndex) =>
      this.setState(prevState => ({
        rootPath: [{ index, maxIndex }, ...prevState.rootPath]
      }));

    return (
      <svg width={config["width"]} height={height}>
        <TreeNode
          index={index}
          isRoot
          yScale={yScale}
          indPerPx={indPerPx}
          zoomOut={zoomOut}
          zoomIn={zoomIn}
        />
      </svg>
    );
  }
}

export default TreeRoot;
