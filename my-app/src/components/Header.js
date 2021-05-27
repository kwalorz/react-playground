import React from "react";

export default function (props) {
  return (
    <header
      style={{
        background: props.background,
        padding: "15px 20px",
        color: "white",
      }}
    >
      {props.children}
    </header>
  );
}
