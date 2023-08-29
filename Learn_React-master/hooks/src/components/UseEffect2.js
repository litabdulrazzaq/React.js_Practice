import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <div>
      <h1>The Actual Window Size</h1>
      <h1>{widthCount}</h1>
    </div>
  );
};

export default UseEffect2;
