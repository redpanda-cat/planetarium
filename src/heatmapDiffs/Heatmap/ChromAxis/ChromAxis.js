import React from "react";
import PropTypes from "prop-types";

import ChromAxisItem from "./ChromAxisItem.js";

const ChromAxis = ({ chromosomeMap, chromosomes, y }) => {
  const axisText = chromosomes.map((chromosome, i) => (
    <ChromAxisItem
      key={chromosome.id}
      chromosome={chromosome.id}
      data={chromosomeMap[chromosome.id]}
      y={y}
      index={i}
    />
  ));
  return <g className="chromAxis">{axisText}</g>;
};

ChromAxis.propTypes = {
  chromosomeMap: PropTypes.object.isRequired,

  chromosomes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,

  y: PropTypes.number.isRequired
};

export default ChromAxis;
