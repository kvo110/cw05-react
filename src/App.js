// main app file for CW 05
// right now I am just wiring in the first component before adding the rest

import React from "react";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div>
      <h1>CW-05 React App</h1>
      <p>Project setup is working.</p>

      {/* first graded component */}
      <HelloWorld />
    </div>
  );
}

export default App;
