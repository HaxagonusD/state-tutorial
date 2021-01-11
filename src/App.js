import "./App.css";
import Person from "./components/Person";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");

  return (
    <div className="App">
      {people.map((personName, index) => {
        return <Person key={index} name={personName} />;
      })}
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
    </div>
  );
}

export default App;
