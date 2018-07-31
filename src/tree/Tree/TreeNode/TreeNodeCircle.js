/**
 * TreeNodeCircle presentational component
 */

import React from "react";
import PropTypes from "prop-types";

import { getXPosition } from "./selectors.js";
import config from "./config.js";

const TreeNodeCircle = ({ heatmapIndex, depth, yScale, onClick }) => (
  <circle
    cx={getXPosition(depth)}
    cy={yScale(heatmapIndex)}
    r={config["nodeRadius"]}
    fill={config["nodeColor"]}
    onClick={onClick}
  />
);

/**
 * PropTypes
 */
TreeNodeCircle.propTypes = {
  /** heatmapIndex */
  heatmapIndex: PropTypes.number.isRequired,

  /** depth */
  depth: PropTypes.number.isRequired,

  /** yScale */
  yScale: PropTypes.func.isRequired
};

export default TreeNodeCircle;
