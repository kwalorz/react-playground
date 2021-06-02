import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  clickedBtn() {
    if (this.props.value === "plus") {
      this.setPoints(this.state.points + 1);
    } else {
      this.setPoints(this.state.points - 1);
    }
  }
  render() {
    return (
      <button className="counter__plus" onClick={this.clickedBtn}>
        {this.props.children}
      </button>
    );
  }
}

// const Button = (props) => {
//   const clickedBtn = () => {
//     // if (props.points === props.goal) {
//     //   props.setGoal(props.points * 2);
//     // }
//     if (props.value === "plus") {
//       props.setPoints(props.points + 1);
//     } else {
//       props.setPoints(props.points - 1);
//     }
//   };

//   const mouseEnter = (e) => {
//     console.log("mouse enters");
//     console.log(e);
//   };

//   const mouseLeave = (e) => {
//     console.log("Mouse leaves");
//     console.log(e);
//   };

//   return (
//     <button
//       className="counter__plus"
//       onClick={clickedBtn}
//       onMouseEnter={mouseEnter}
//       onMouseLeave={mouseLeave}
//     >
//       {props.children}
//     </button>
//   );
// };

export default Button;
