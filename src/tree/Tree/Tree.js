import React, { Component } from "react";

import HeightInput from "./HeightInput";
import TreeRoot from "./TreeRoot";

import { getRootData } from "./data.js";
import config from "./config.js";

/**
 * Tree - React Component
 */

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: config["height"]
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = height => {
    this.setState(prevState => ({ height }));
  };

  render() {
    const data = getRootData();

    return (
      <div>
        <HeightInput value={this.state.height} onSubmit={this.onSubmit} />
        <TreeRoot
          trueRootID={data.id}
          trueIndex={data.index}
          trueMaxIndex={data.maxIndex}
          height={this.state.height}
        />
      </div>
    );
  }
}

export default Tree;
