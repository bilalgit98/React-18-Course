import React, { useState } from "react";

const App = ({ initialCount }) => {
  let [count, setCount] = useState(initialCount);

  const addOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <>
      <h3> Count: {count}</h3>
      <button onClick={addOne}>Add One </button>
      <button onClick={minusOne}>Minus One </button>
      <button onClick={() => setCount(initialCount)}>Reset </button>
    </>
  );
};

export default App;
