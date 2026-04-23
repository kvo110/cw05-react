// counter component - now includes both increment and reset functionality
// added reset so user can bring count back to 0 easily

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  // increases count
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // resets count back to 0
  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.increment}>
          Increase
        </button>

        {/* added reset button */}
        <button onClick={this.reset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
