import React, { Component } from "react";

export const StateContext = React.createContext();

export class GlobalStateProvider extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: "Kevin",
  };

  render() {
    return (
      <StateContext.Provider value={this.state}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
