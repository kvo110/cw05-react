// main app file for CW 05
// now the full app is connected and wrapped in sections so styling looks cleaner

import React from "react";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import List from "./components/List";
import FilteredList from "./components/FilteredList";
import "./App.css";

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
    <div className="app-shell">
      <div className="app-container">
        <header className="app-header">
          <h1>CW-05 React App</h1>
          <p>
            This page shows class components, state, props, lists, and filtering
            all in one React app.
          </p>
        </header>

        <section className="card">
          <HelloWorld />
        </section>

        <section className="card">
          <Counter />
        </section>

        <section className="card">
          <List items={fruits} />
        </section>

        <section className="card">
          <FilteredList items={itemData} />
        </section>
      </div>
    </div>
  );
}

export default App;
