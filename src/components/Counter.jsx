// counter component - this is where we practice state and button clicks
// trying to keep it simple but still clear how state updates work

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    // starting count at 0
    this.state = {
      count: 0
    };
  }

  // function to increase count
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>

        {/* button updates state */}
        <button onClick={this.increment}>
          Increase
        </button>
      </div>
    );
  }
}

export default Counter;
