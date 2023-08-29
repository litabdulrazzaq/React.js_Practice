import React, { useState } from "react";

const UseStateObject = () => {
  const [myObj, setMyObj] = useState({
    name: "Abdul Razzaq",
    age: 25,
    degree: "MCS",
  });

  const changeObject = () => {
    setMyObj({ ...myObj, age: 30 });
  };
  return (
    <div>
      <h2>
        Name: {myObj.name} and Age {myObj.age} and Degree {myObj.degree}
        <button>Remove</button>
      </h2>
      <button onClick={changeObject}>Update</button>
    </div>
  );
};

export default UseStateObject;
