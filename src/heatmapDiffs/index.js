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

const data = (
  <Slide>
    <Heading>Context</Heading>
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

const ploidy1 = (
  <Slide>
    <Heading>Ploidy</Heading>
  </Slide>
);

const ploidy2 = (
  <Slide>
    <Heading>Ploidy</Heading>
  </Slide>
);

/**
 *  Mode
 */

const mode1 = (
  <Slide>
    <Heading>Mode</Heading>
  </Slide>
);

const mode2 = (
  <Slide>
    <Heading>Mode</Heading>
  </Slide>
);

export default [title, data, goals, ploidy1, ploidy2, mode1, mode2];
