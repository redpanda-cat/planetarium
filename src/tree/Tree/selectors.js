import { scaleLinear } from "d3";
import { getCurrRootRange, getIndicesPerPixel } from "../selectors.js";
import { createSelector } from "reselect";
import config from "./config.js";

const jsonData = require("../assets/data.json");
const data = jsonData.data.allNodes;

export const getNodeData = index => data[index];

// TreeCluster
export { makeIsIndexRangeHighlighted } from "../selectors.js";

// TreeNode
export { makeIsIndexHighlighted } from "../selectors.js";

// Tree
export { getCurrRootID } from "../selectors.js";

// TreeChildren
export { makeGetTreeElementsByChildren } from "./elementsSelector.js";

/**
 * Gets offset index distance - the number of indices to remove at the end for branch/cluster spacing
 */
export const getOffsetIndex = createSelector(
  [getIndicesPerPixel],
  // int => int
  indPerPx => indPerPx * config["clusterVerticalOffset"]
);

/**
 * Gets heatmap index to y-coordinate scale
 */
export const getYScale = index => {
  const node = getNodeData(index);

  return scaleLinear()
    .domain([index, node["maxIndex"]])
    .range([config["nodeRadius"], config["height"]]);
};

/**
 * Gets x position for tree component given some depth
 * @param {int} depth
 * @return {int}
 */
export const getXPosition = depth =>
  depth * config["depthSpacing"] + config["nodeRadius"];
