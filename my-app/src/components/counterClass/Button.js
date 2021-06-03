import React, { Component } from "react";

const Button = (props) => {
  const clickedBtn = () => {
    if (props.points === props.goal) {
      props.setGoal(props.points * 2);
    }
    if (props.value === "plus") {
      props.setPoints(props.points + 1);
    } else {
      props.setPoints(props.points - 1);
    }
  };

  const mouseEnter = (e) => {
    console.log("mouse enters");
    console.log(e);
  };

  const mouseLeave = (e) => {
    console.log("Mouse leaves");
    console.log(e);
  };

  return (
    <button
      className="counter__plus"
      onClick={clickedBtn}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {props.children}
    </button>
  );
};

export default Button;
