/**
 * Heatmap -  React Component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { getChromosomeData } from "./api.js";

import { getYScale, getChromPixelMapping, getBPRatio } from "./selectors.js";

import HeatmapRow from "./HeatmapRow/HeatmapRow.js";
import ChromAxis from "./ChromAxis/ChromAxis.js";

import config from "./config.js";

class Heatmap extends Component {
  render() {
    const {
      segs,
      isDiffOn,
      isPloidyNormalized,
      rowHeight,
      noAxis
    } = this.props;
    const chromosomes = getChromosomeData();
    const bpRatio = getBPRatio(chromosomes);
    const chromMap = getChromPixelMapping(chromosomes);

    const filteredSegs = segs.filter(seg => seg.segs.length > 0);

    const indices = filteredSegs.map(seg => seg["index"]);
    const yScale = getYScale(indices, rowHeight);

    const segRows = filteredSegs.map(seg => {
      const { id, name, ...segData } = seg;

      const rowData = { ...segData, id: name };
      return (
        <HeatmapRow
          key={rowData["id"]}
          rowData={rowData}
          chromMap={chromMap}
          bpRatio={bpRatio}
          isDiffOn={isDiffOn}
          yScale={yScale}
          isPloidyNormalized={isPloidyNormalized}
          rowHeight={rowHeight}
        />
      );
    });

    return (
      <svg
        width={config["width"]}
        height={(filteredSegs.length + 5) * rowHeight}
      >
        {segRows}
        {noAxis ? null : (
          <ChromAxis
            y={(filteredSegs.length + 1) * rowHeight}
            chromosomes={chromosomes}
            chromosomeMap={chromMap}
          />
        )}
      </svg>
    );
  }
}
Heatmap.defaultProps = {
  rowHeight: config["rowHeight"],
  noAxis: false
};
export default Heatmap;
