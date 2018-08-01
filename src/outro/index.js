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

const slide1 = (
  <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Future Work
    </Heading>
    <List>
      <ListItem>Pseudobulk dashboard</ListItem>
    </List>
  </Slide>
);

export default [slide1];
