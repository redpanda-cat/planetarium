/**
 * TreeNodePoint -  React Component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import TreeNodeCircle from "./TreeNodeCircle";

class TreeNodePoint extends Component {
  static propTypes = {
    /** nodeID*/
    nodeID: PropTypes.string.isRequired,

    /** heatmapIndex */
    heatmapIndex: PropTypes.number.isRequired,

    /** maxDescendantIndex */
    maxDescendantIndex: PropTypes.number.isRequired,

    /** numChildren */
    numChildren: PropTypes.number.isRequired,

    /** depth */
    depth: PropTypes.number.isRequired,

    /** yScale */
    yScale: PropTypes.func.isRequired,

    /** offsetBy - number of indices to offset drawing by */
    offsetBy: PropTypes.number.isRequired
  };

  render() {
    const {
      nodeID,
      heatmapIndex,
      maxDescendantIndex,
      numChildren,
      depth,
      yScale,
      isHighlighted,
      offsetBy,
      isRoot,
      zoomOut,
      zoomIn
    } = this.props;

    const onMouseEnter = () => {
      this.props.highlightElement({
        index: heatmapIndex,
        range: [heatmapIndex, maxDescendantIndex],
        element: "clade",
        data: {
          id: nodeID,
          children: numChildren
        }
      });
    };

    const onMouseLeave = () => {
      this.props.unhighlightElement();
    };

    const onMouseClick = () => {
      isRoot ? zoomOut() : zoomIn(heatmapIndex, maxDescendantIndex);
    };

    return (
      <TreeNodeCircle
        heatmapIndex={heatmapIndex - offsetBy}
        depth={depth}
        yScale={yScale}
        onClick={onMouseClick}
      />
    );
  }
}

export default TreeNodePoint;
