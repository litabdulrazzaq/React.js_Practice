import React, { useState } from "react";

const UseState = () => {
  const [myName, setMyName] = useState("Abdul Razzaq");

  const toggleHandling = () => {
    let val = myName;
    val === "Abdul Razzaq"
      ? setMyName("Abdul Razzaq Lucky")
      : setMyName("Abdul Razzaq");
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={toggleHandling}>Toggle Button</button>
    </div>
  );
};

export default UseState;
