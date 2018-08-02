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
  Image,
  Fill,
  Layout
} from "spectacle";

import Tree from "./Tree/Tree.js";

const images = {
  cellscape: require("./assets/cellscape.png"),
  largeTree: require("./assets/cellscape2.png"),
  lyra1: require("./assets/lyra1.png"),
  lyra2: require("./assets/lyra2.png")
};

/**
 * Title Slide
 */

const title = (
  <Slide transition={["fade"]} textColor="tertiary">
    <Heading size={6} textColor="secondary" caps fit>
      Creating a scalable tree
    </Heading>
  </Slide>
);

/**
 * Context
 */

const data = (
  <Slide>
    <Text margin="20px" fit>
      Trees that have been generated have A LOT of data
    </Text>
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
  <Slide bgColor={"#FFFFFF"}>
    <Layout>
      <Fill>
        <Image src={images.cellscape.replace("/", "")} />
      </Fill>
      <Fill>
        <Appear fid="1">
          <Image src={images.largeTree.replace("/", "")} />
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const goals = (
  <Slide>
    <Heading>Goals</Heading>
    <List padding="0em 10em">
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
  <Slide bgColor={"#FFFFFF"}>
    <Layout>
      <Fill>
        <Image src={images.cellscape.replace("/", "")} />
      </Fill>
      <Appear fid="1">
        <Fill>
          <Image src={images.lyra1.replace("/", "")} />
        </Fill>
      </Appear>
      <Appear fid="2">
        <Fill>
          <Image src={images.lyra2.replace("/", "")} />
        </Fill>
      </Appear>
    </Layout>
  </Slide>
);

const result = (
  <Slide bgColor={"#FFFFFF"}>
    <Layout>
      <Fill>
        <Image src={images.largeTree.replace("/", "")} />
      </Fill>
      <Fill>
        <Tree />
      </Fill>
    </Layout>
  </Slide>
);

export default [title, data, cellscape1, goals, threshold, result];
