import { scaleLinear } from "d3";
import { createSelector } from "reselect";
import config from "./config.js";

// TreeChildren
export {
  makeGetTreeElementsByChildren,
  getTreeElements
} from "./elementsSelector.js";

export const getIndicesPerPixel = (numNodes, height) => numNodes / height;

/**
 * Gets offset index distance - the number of indices to remove at the end for branch/cluster spacing
 */
export const getOffsetIndex = indPerPx =>
  indPerPx * config["clusterVerticalOffset"];

/**
 * Gets heatmap index to y-coordinate scale
 */
export const getYScale = (index, maxIndex, height) => {
  return scaleLinear()
    .domain([index, maxIndex])
    .range([config["nodeRadius"], height]);
};

/**
 * Gets x position for tree component given some depth
 * @param {int} depth
 * @return {int}
 */
export const getXPosition = depth =>
  depth * config["depthSpacing"] + config["nodeRadius"];
