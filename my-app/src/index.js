import React from "react";
import ReactDOM from "react-dom";

let lName = "Walorz";
let loggedIn = true;
let width = 400;
let height = 500;
let styles = {
  box: {
    background: "red",
    color: "white",
    textAlign: "center",
    width: `${width}px`,
    height: `${height}px`,
  },
};

const App = () => {
  const printAlert = (message) => {
    alert(message);
  };

  return (
    <>
      <Header background="black">
        <div>Logo</div>
        <nav>
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
        </nav>
      </Header>
      <Logo>
        <div> Super Logo</div>
      </Logo>
    </>
  );
};

const Header = (props) => {
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
};

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

ReactDOM.render(<App />, document.getElementById("root"));
