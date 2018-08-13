import React from "react";
import { Heading, ListItem, List, Slide, Text, Image, Appear } from "spectacle";

const images = {
  qc: require("./assets/qc.png"),
  lyra: require("./assets/lyra1.png")
};

const title = (
  <Slide transition={["zoom"]} bgColor="bgColor">
    <Heading size={1} caps lineHeight={1}>
      Lyra
    </Heading>

    <Text margin="10px 0 0" textColor="subprimary" textSize={30} bold>
      AKA How to visualize large trees and copy number heatmaps in real time
    </Text>
    <Text margin="10px" textColor="subprimary" textSize={20} lineHeight={20}>
      Shah Lab Meeting - August 7th, 2018
    </Text>
    <Text margin="10px 0 0" textColor="subprimary" textSize={20}>
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
    <List padding="0em 10em">
        <ListItem>Build specific dashboards</ListItem>
        <ListItem>React + Redux frontend</ListItem>
        <ListItem>ElasticSearch + GraphQL backend</ListItem>
    </List>
  </Slide>
);

const now = (
  <Slide transition={["slide"]} bgColor={"#FFFFFF"}>
    <Image src={images.lyra.replace("/", "")} />
  </Slide>
);

export default [title, prev1, prev2, changes, now];
