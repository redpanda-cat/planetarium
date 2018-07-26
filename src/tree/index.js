import React from "react";

import {
  Appear,
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
  TableItem,
  Image
} from "spectacle";

const images = {
  cellscape: require("./assets/cellscape.png")
};

/**
 * Title Slide
 */

const title = (
  <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Creating a scalable tree
    </Heading>
  </Slide>
);

/**
 * Context
 */

const data = (
  <Slide>
    <Text margin="20px">Trees that have been generated have A LOT of data</Text>
    <Table>
      <TableHeader>
        <TableRow bold>
          <TableHeaderItem>
            <Text bold>Jira ID</Text>
          </TableHeaderItem>
          <TableHeaderItem>
            <Text bold>Sample</Text>
          </TableHeaderItem>
          <TableHeaderItem>
            <Text bold># Cells</Text>
          </TableHeaderItem>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableItem>SC-715</TableItem>
          <TableItem>SA501X</TableItem>
          <TableItem>4124</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>SC-716</TableItem>
          <TableItem>SA535X</TableItem>
          <TableItem>684</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>SC-769</TableItem>
          <TableItem>SA609X</TableItem>
          <TableItem>2515</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>SC-1035</TableItem>
          <TableItem>SA532X</TableItem>
          <TableItem>1246</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>SC-1055</TableItem>
          <TableItem>OV</TableItem>
          <TableItem>1426</TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
);

const cellscape1 = (
  <Slide>
    <Heading>CellScape</Heading>
    <Image src={images.cellscape.replace("/", "")} />
  </Slide>
);

const goals = (
  <Slide>
    <Heading>Goals</Heading>
    <List>
      <Appear fid="1">
        <ListItem>Retains overall detail of original tree</ListItem>
      </Appear>
      <Appear fid="2">
        <ListItem>Renders quickly</ListItem>
      </Appear>
      <Appear fid="3">
        <ListItem>Scales well</ListItem>
      </Appear>
    </List>
  </Slide>
);

/**
 * Thresholding
 */
const threshold = (
  <Slide>
    <Heading>Method</Heading>
  </Slide>
);

const result = (
  <Slide>
    <Heading>Result</Heading>
  </Slide>
);

export default [title, data, cellscape1, goals, threshold, result];
