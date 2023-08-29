import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Data from "./components/Data";
import { Button, Container } from "react-bootstrap";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <div className="App container">
      <header className="App-header">{people.length} Students</header>
      <List people={people} />
      <button
        onClick={() => setPeople([])}
        className="bg-blue-500 text-white p-4"
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
