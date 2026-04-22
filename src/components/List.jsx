// list component - showing how to pass props and loop through data
// using map here since that’s what React expects for lists

import React, { Component } from "react";

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        <h2>Item List</h2>

        <ul>
          {items.map((item, index) => (
            // using index as key since this is just a simple demo list
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
