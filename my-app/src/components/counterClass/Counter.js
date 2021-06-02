import React, { Component, useState, useEffect } from "react";
import Button from "./Button";
import Number from "./Number";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    points: 0,
    goal: 11,
  };

  setPoints = (point) => {
    this.setState({ ...this.state, points: point }, () => {
      if (this.state.points === this.state.goal) {
        this.setGoal(this.state.points * 2);
      }
    });
  };

  setGoal = (goal) => {
    this.setState({ ...this.state, goal: goal });
  };

  render() {
    return (
      <div className="counter">
        <Number digit={this.state.points}></Number>
        <div className="counter__buttons">
          <Button
            points={this.state.points}
            setPoints={this.setPoints}
            value="minus"
            goal={this.state.goal}
            setGoal={this.setGoal}
          >
            -
          </Button>
          <Button
            points={this.state.points}
            setPoints={this.setPoints}
            value="plus"
            goal={this.state.goal}
            setGoal={this.setGoal}
          >
            +
          </Button>
          Goal {this.state.goal}
        </div>
      </div>
    );
  }
}

// const Counter = (props) => {
//   const [points, setPoints] = useState(0);
//   const [goal, setGoal] = useState(11);

//   useEffect(() => {
//     console.log("run every time");
//   });
//   useEffect(() => {
//     console.log("run on first render");
//   }, []);
//   useEffect(() => {
//     console.log("run on first render and when goal changes");
//   }, [goal]);

//   return (
/* <div className="counter">
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
</div>; */
//   );
// };

export default Counter;
