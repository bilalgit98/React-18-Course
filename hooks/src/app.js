import React, { useState, useEffect } from "react";
import Post from "./post";

const App = ({ initialCount }) => {
  let [state, setState] = useState({ count: initialCount, user: "john" });

  //new state
  let [posts, setPosts] = useState([
    {
      name: "cool hook",
      body: "awesome collection of hooks",
    },
  ]);
  //   const addOne = () => {
  //     setCount(count + 1);
  //   };

  const minusOne = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  const addOnePost = () => {
    let newPost = {
      name: "just a hook",
      body: "your looking at hooks",
    };

    setPosts([...posts, newPost]);
  };

  const removePosts = () => {
    setPosts([]);
  };

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <>
      <h1>{state.user}</h1>
      <h3> Count: {state.count}</h3>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        Add One{" "}
      </button>
      <button onClick={minusOne}>Minus One </button>
      <button onClick={() => setState({ ...state, count: initialCount })}>
        Reset
      </button>

      <hr />

      {posts.map((item, i) => (
        <Post item={item} key={i} />
      ))}
      <button onClick={addOnePost}>Add one more</button>
      <button onClick={removePosts}>Remove Posts</button>
    </>
  );
};

export default App;
