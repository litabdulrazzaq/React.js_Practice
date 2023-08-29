import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    count === 0
      ? (document.title = `Count`)
      : (document.title = `Count (${count})`);
  }, [count]);

  useEffect(() => {
    console.log("I love Pakistan");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click To Count
      </button>
    </div>
  );
};

export default UseEffect1;
