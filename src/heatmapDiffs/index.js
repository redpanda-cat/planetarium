import React from "react";

import {
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

const ploidy1 = (
  <Slide>
    <Heading>Ploidy</Heading>
    <div>
      <Heatmap segs={ploidyData} isDiffOn={false} isPloidyNormalized={false} />
    </div>
    <div>
      <Heatmap segs={ploidyData} isDiffOn={false} isPloidyNormalized={true} />
    </div>
  </Slide>
);

const ploidy2 = (
  <Slide>
    <Heading>Ploidy after centering</Heading>
    <Heatmap segs={ploidyData} isDiffOn={false} isPloidyNormalized={true} />
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
const mode1 = (
  <Slide>
    <Heading>Mode</Heading>
    <Heatmap segs={centerData} isDiffOn={true} isPloidyNormalized={false} />
    <Heatmap segs={[modeDataRow]} isDiffOn={false} isPloidyNormalized={false} />
  </Slide>
);

const mode2 = (
  <Slide>
    <Heading>Mode</Heading>
  </Slide>
);

export default [title, data, goals, ploidy1, ploidy2, mode1, mode2];
