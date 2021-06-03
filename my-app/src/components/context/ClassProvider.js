import React, { Component } from "react";

export const StateContext = React.createContext();

export class GlobalStateProvider extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: "Kevin",
  };

  handleChange = (e) => {
    this.setState({ ...this.state, name: e.target.value });
  };

  render() {
    return (
      <StateContext.Provider
        value={{ state: this.state, handleChange: this.handleChange }}
      >
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
