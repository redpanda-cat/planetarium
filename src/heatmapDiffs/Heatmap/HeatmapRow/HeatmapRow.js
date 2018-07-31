/**
 * HeatmapRow container component
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import HeatmapRowAnnotations from "./HeatmapRowAnnotations";
import Row from "../common/Row.js";

import config from "./config.js";

import { getAnnotationsX } from "./selectors.js";

class HeatmapRow extends Component {
  static propTypes = {
    /** rowData */
    rowData: PropTypes.object.isRequired,

    /** yScale */
    yScale: PropTypes.func.isRequired,

    /** chromMap */
    chromMap: PropTypes.object.isRequired,

    /** bpRatio */
    bpRatio: PropTypes.number.isRequired
  };

  render() {
    const {
      rowData,
      yScale,
      chromMap,
      bpRatio,
      isPloidyNormalized,
      isDiffOn
    } = this.props;
    const { index, segs, id, ploidy } = rowData;
    const y = yScale(index);
    const annotationsX = getAnnotationsX(chromMap);

    return (
      <g className={index}>
        <Row
          cellID={id}
          segs={segs}
          y={y}
          bpRatio={bpRatio}
          chromMap={chromMap}
          height={config["rowHeight"]}
          colorScale={
            isDiffOn ? config["ploidyColorScale"] : config["colorScale"]
          }
          stateOffset={isPloidyNormalized ? ploidy - 2 : 0}
        />
        <HeatmapRowAnnotations
          cellID={id}
          ploidy={ploidy}
          isPloidyNormalized={isPloidyNormalized}
          y={y}
          x={annotationsX}
        />
      </g>
    );
  }
}

export default HeatmapRow;
