import React, { Component } from "react";
import { StateContext } from "./FuncProvider";

class B extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100px",
          flexDirection: "column",
          background: "red",
          color: "white",
          fontSize: "1.2rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        B
        <StateContext.Consumer>
          {(context) => <h2>My name is: {context.state.name}</h2>}
        </StateContext.Consumer>
        {this.props.children}
      </div>
    );
  }
}

export default B;
