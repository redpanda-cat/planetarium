import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear
} from "spectacle";

const images = {
  qc: require("./assets/qc.png"),
  lyra: require("./assets/lyra1.png")
};

const title = (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} caps lineHeight={1} textColor="secondary">
      Lyra
    </Heading>

    <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
      AKA How to visualize large trees and copy number heatmaps in real time
    </Text>
    <Text margin="10px" textColor="secondary" textSize={20} lineHeight={20}>
      Shah Lab Meeting - August 7th, 2018
    </Text>
    <Text margin="10px 0 0" textColor="secondary" textSize={20}>
      Viz Team! :D
    </Text>
  </Slide>
);

const prev1 = (
  <Slide
    transition={["fade"]}
    bgImage={images.qc.replace("/", "")}
    bgDarken={0.75}
  >
    <Text textColor="primary" size={1}>
      Previously, from the viz team...
    </Text>
  </Slide>
);

const prev2 = (
  <Slide transition={["fade"]} bgImage={images.qc.replace("/", "")} />
);

const changes = (
  <Slide>
    <Heading>Major Changes</Heading>
    <List>
      <Appear fid="1">
        <ListItem>Build specific dashboards</ListItem>
      </Appear>
      <Appear fid="2">
        <ListItem>React + Redux frontend</ListItem>
      </Appear>
      <Appear fid="3">
        <ListItem>ElasticSearch + GraphQL backend</ListItem>
      </Appear>
    </List>
  </Slide>
);

const now = (
  <Slide transition={["slide"]}>
    <Image src={images.lyra.replace("/", "")} />
  </Slide>
);

export default [title, prev1, prev2, changes, now];
