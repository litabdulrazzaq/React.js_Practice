import React from "react";
import "./myStyle.css";

const heading = {
  fontSize: "60px",
  color: "red",
};

function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`} style={heading}>
        Abdul Razzaq
      </h1>
    </div>
  );
}

export default StyleSheet;
