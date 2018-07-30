/**
 * TreeNode -  React Component
 */

import React from "react";
import PropTypes from "prop-types";

import { getNodeData } from "./data.js";

import TreeNodePoint from "./TreeNode/TreeNodePoint";
import TreeChildren from "./TreeChildren";
import TreeHorizontalBranch from "./TreeBranch/TreeHorizontalBranch";

const TreeNode = ({
  yScale,
  index,
  depth,
  siblingIndex,
  offsetBy,
  isRoot,
  indPerPx
}) => {
  const data = getNodeData(index);
  console.log(index, data);
  const { id, children, parent, maxIndex } = data;

  const branch =
    parent === "root" ? (
      ""
    ) : (
      <TreeHorizontalBranch
        heatmapIndex={index - offsetBy}
        depth={depth}
        yScale={yScale}
      />
    );
  return (
    <g>
      {branch}
      <TreeNodePoint
        nodeID={id}
        heatmapIndex={index}
        maxDescendantIndex={maxIndex}
        numChildren={children.length}
        depth={depth}
        yScale={yScale}
        offsetBy={offsetBy}
        isRoot={isRoot}
      />
      <TreeChildren
        children={children}
        depth={depth + 1}
        parentIndex={index - offsetBy}
        auntIndex={siblingIndex}
        offsetBy={offsetBy}
        yScale={yScale}
        indPerPx={indPerPx}
      />
    </g>
  );
};

/**
 * Tree Node Data Fetcher
 */

TreeNode.defaultProps = {
  depth: 0,
  offsetBy: 0,
  isRoot: false
};

/**
 * PropTypes
 */
TreeNode.propTypes = {
  /** nodeID*/
  //nodeID: PropTypes.string.isRequired,

  /** depth - current depth of node from root */
  depth: PropTypes.number.isRequired,

  /** siblingIndex - offsetted heatmap index of adjacent sibling */
  siblingIndex: PropTypes.number,

  /** offsetBy - number of indices to offset drawing by */
  offsetBy: PropTypes.number.isRequired
};

export default TreeNode;
