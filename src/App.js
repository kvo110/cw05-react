// main app file for CW 05
// now adding list component and passing sample data as props

import React from "react";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {

  // sample data to pass into list component
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div>
      <h1>CW-05 React App</h1>
      <p>Project setup is working.</p>

      <HelloWorld />

      <Counter />

      {/* passing props into List */}
      <List items={fruits} />
    </div>
  );
}

export default App;
