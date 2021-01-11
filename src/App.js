import "./App.css";
import Person from "./components/Person";
import { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");

  return (
    <div>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <button
        onClick={() => {
          const newArray = [...people, name];
          setPeople(newArray);
        }}
      >
        Add Person
      </button>

      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Delete Everything
      </button>
    </div>
  );
}

export default App;
