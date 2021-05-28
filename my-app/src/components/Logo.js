import React from "react";

const Logo = (props) => {
  return (
    <div
      className="logo"
      style={{
        background: "blue",
        fontSize: "1.5rem",
        color: "white",
        fontWeight: "700",
      }}
    >
      {props.children}
    </div>
  );
};

export default Logo;
