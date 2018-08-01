import React from "react";

import {
  Appear,
  Layout,
  Fill,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableBody,
  TableItem
} from "spectacle";

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
  <Slide>
    <Heatmap segs={normalData} isDiffOn={false} isPloidyNormalized={false} />
  </Slide>
);

const goals = (
  <Slide>
    <Heading>Goals</Heading>
    <List>
      <ListItem>
        Quickly see alterations that uniquely identify a clone
      </ListItem>
    </List>
  </Slide>
);

/**
 *  Ploidy
 */

const ploidyData = getPloidyData();

const ploidy = (
  <Slide>
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
  <Slide>
    {normalHeatmap}
    <Appear fid="1">
      <div>{modeHeatmap}</div>
    </Appear>
  </Slide>
);

const mode2 = (
  <Slide>
    {centerHeatmap} {modeHeatmap}
  </Slide>
);

const mode3 = (
  <Slide maxWidth={1700}>
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

export default [title, data, goals, ploidy, mode1, mode2, mode3];
