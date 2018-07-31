import React, { Component } from "react";

class HeightInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={() => this.props.onSubmit(this.state.value)}>
        <label>
          Height:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default HeightInput;
