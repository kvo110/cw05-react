// main app file for CW 05
// now adding the counter component to test state functionality

import React from "react";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>CW-05 React App</h1>
      <p>Project setup is working.</p>

      {/* first component */}
      <HelloWorld />

      {/* second component - state example */}
      <Counter />
    </div>
  );
}

export default App;
