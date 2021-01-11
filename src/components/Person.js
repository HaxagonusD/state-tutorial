// This is ther Person component
import { useState } from "react";
function Person({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>
        {name} has {count} things{" "}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase counter
      </button>
    </div>
  );
}
export default Person;
