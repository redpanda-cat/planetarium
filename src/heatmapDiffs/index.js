import React from "react";

import { Appear, Layout, Fill, Heading, Slide } from "spectacle";

import {
  getSegData,
  getPloidyData,
  getModeData,
  getCenterData
} from "./Heatmap/api.js";
import Heatmap from "./Heatmap/Heatmap.js";

/**
 * Title Slide
 */

const title = (
  <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Improving copy number heatmap
    </Heading>
  </Slide>
);

const normalData = getSegData();
const data = (
  <Slide bgColor={"#FFFFFF"}>
    <Heatmap segs={normalData} isDiffOn={false} isPloidyNormalized={false} />
  </Slide>
);

/**
 *  Ploidy
 */

const ploidyData = getPloidyData();

const ploidy = (
  <Slide bgColor={"#FFFFFF"}>
    <div>
      <Heatmap segs={ploidyData} isDiffOn={false} isPloidyNormalized={false} />
    </div>
    <Appear fid="1">
      <div>
        <Heatmap segs={ploidyData} isDiffOn={false} isPloidyNormalized={true} />
      </div>
    </Appear>
  </Slide>
);

/**
 *  Mode
 */
const centerData = getCenterData();
const modeData = getModeData();

const modeDataRow = {
  id: "mode",
  name: "mode",
  index: 0,
  ploidy: -1,
  segs: modeData
};

const normalHeatmap = (
  <Heatmap segs={normalData} isDiffOn={false} isPloidyNormalized={false} />
);
const centerHeatmap = (
  <Heatmap segs={centerData} isDiffOn={true} isPloidyNormalized={false} />
);
const modeHeatmap = (
  <Heatmap
    segs={[modeDataRow]}
    isDiffOn={false}
    isPloidyNormalized={false}
    rowHeight={20}
    noAxis
  />
);

const mode1 = (
  <Slide bgColor={"#FFFFFF"}>
    {normalHeatmap}
    <Appear fid="1">
      <div>{modeHeatmap}</div>
    </Appear>
  </Slide>
);

const mode2 = (
  <Slide bgColor={"#FFFFFF"}>
    {centerHeatmap} {modeHeatmap}
  </Slide>
);

const mode3 = (
  <Slide bgColor={"#FFFFFF"}>
    <Layout>
      <Fill>
        <div>{normalHeatmap}</div>
      </Fill>
      <Fill>
        <div>{centerHeatmap}</div>
      </Fill>
    </Layout>
  </Slide>
);

export default [title, data, ploidy, mode1, mode2, mode3];
