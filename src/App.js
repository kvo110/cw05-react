// main app file for CW 05
// now adding the filtered list so the app covers search and category filtering too

import React from "react";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import List from "./components/List";
import FilteredList from "./components/FilteredList";

function App() {

  // sample data for the basic list
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  // sample data for the filtered list
  const itemData = [
    { name: "Apple", category: "Fruit" },
    { name: "Banana", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Broccoli", category: "Vegetable" },
    { name: "Milk", category: "Dairy" },
    { name: "Cheese", category: "Dairy" }
  ];

  return (
    <div>
      <h1>CW-05 React App</h1>
      <p>Project setup is working.</p>

      <HelloWorld />

      <Counter />

      <List items={fruits} />

      {/* filtered list with search and dropdown */}
      <FilteredList items={itemData} />
    </div>
  );
}

export default App;
