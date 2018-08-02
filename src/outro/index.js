import React from "react";

import { Heading, ListItem, List, Slide } from "spectacle";

/**
 * Title Slide
 */

const slide1 = (
  <Slide transition={["fade"]}>
    <Heading size={6} textColor="secondary" caps>
      Future Work
    </Heading>
    <List padding="0em 10em">
      <ListItem>Pseudobulk dashboard</ListItem>
    </List>
  </Slide>
);

const thanks = (
  <Slide transition={["fade"]}>
    <Heading size={6} textColor="secondary" caps fit>
      THANKS! :D
    </Heading>
  </Slide>
);
export default [slide1, thanks];
