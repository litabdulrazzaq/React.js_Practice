import React, { useState } from "react";

const UseStateArray = () => {
  const myBioData = [
    {
      id: 0,
      Name: "Abdul Razzaq",
      age: 25,
    },
    {
      id: 1,
      Name: "Lit Rashid",
      age: 27,
    },
    {
      id: 2,
      Name: "Muhammad Ishaq",
      age: 23,
    },
  ];

  const btnClear = () => {
    setMyArray([]);
  };

  const [myArray, setMyArray] = useState(myBioData);

  const removeRecord = (id) => {
    const newArray = myArray.filter((curEle) => {
      return curEle.id !== id;
    });
    setMyArray(newArray);
  };
  return (
    <>
      {myArray.map((curEle) => (
        <h4 key={curEle.id}>
          Id: {curEle.id} ; Name: {curEle.Name} ; and Age: {curEle.age}
          <button onClick={() => removeRecord(curEle.id)}>Remove</button>
        </h4>
      ))}
      <button onClick={btnClear}>Clear</button>
    </>
  );
};

export default UseStateArray;
