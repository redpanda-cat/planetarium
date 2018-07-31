/**
 * TreeChildrenCluster container component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import TreeCluster from "./TreeCluster";

class TreeChildrenCluster extends Component {
  static propTypes = {
    /** minIndex, maxIndex - min and max indices for cluster (for highlighting) */
    minIndex: PropTypes.number.isRequired,
    maxIndex: PropTypes.number.isRequired,

    /** depth */
    depth: PropTypes.number.isRequired,

    /** clusterHeight - number of indices to be drawn */
    clusterHeight: PropTypes.number.isRequired,

    /** maxHeight - length of tallest branch of a node in this cluster */
    maxHeight: PropTypes.number.isRequired,

    /** yScale, clusterColorScale */
    yScale: PropTypes.func.isRequired,

    /** offsetBy - number of indices to offset clusters by*/
    offsetBy: PropTypes.number.isRequired
  };

  render() {
    const {
      minIndex,
      maxIndex,
      clusterHeight,
      maxHeight,
      depth,
      yScale,
      isHighlighted,
      offsetBy,
      parentIndex
    } = this.props;

    const onMouseEnter = () => {
      this.props.highlightElement({
        range: [minIndex, maxIndex],
        element: "cluster"
      });
    };

    const onMouseLeave = () => {
      this.props.unhighlightElement();
    };

    const startingIndex = Math.max(minIndex - offsetBy, parentIndex);

    return (
      <TreeCluster
        minIndex={startingIndex}
        maxIndex={startingIndex + clusterHeight}
        depth={depth}
        yScale={yScale}
        maxHeight={maxHeight}
      />
    );
  }
}

export default TreeChildrenCluster;
