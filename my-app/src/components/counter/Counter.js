import React, { useState, useEffect } from "react";
import Button from "./Button";
import Number from "./Number";

const Counter = (props) => {
  const [points, setPoints] = useState(0);
  const [goal, setGoal] = useState(11);

  useEffect(() => {
    console.log("run every time");
  });
  useEffect(() => {
    console.log("run on first render");
  }, []);
  useEffect(() => {
    console.log("run on first render and when goal changes");
  }, [goal]);

  return (
    <div className="counter">
      <Number digit={points}></Number>
      <div className="counter__buttons">
        <Button
          points={points}
          setPoints={setPoints}
          value="minus"
          goal={goal}
          setGoal={setGoal}
        >
          -
        </Button>
        <Button
          points={points}
          setPoints={setPoints}
          value="plus"
          goal={goal}
          setGoal={setGoal}
        >
          +
        </Button>
        Goal {goal}
      </div>
    </div>
  );
};

export default Counter;
