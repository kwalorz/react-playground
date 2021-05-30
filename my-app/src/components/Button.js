import React from "react";

const Button = (props) => {
  let buttonRef = React.createRef();
  return (
    <button
      ref={buttonRef}
      id="button"
      style={{
        background: "black",
        color: "white",
        fontSize: "1.3rem",
        padding: "10px 20px",
      }}
    >
      {" "}
      {props.children}
    </button>
  );
};

export default Button;
