import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import Card from "./Card";
import Counter from "./counterClass/Counter";
import Form from "./form/Form";
import { GlobalStateProvider, StateContext } from "./context/ClassProvider";
import A from "./context/A";
import B from "./context/B";

let data = [
  {
    fullName: "Kevin Walorz",
    status: "friend",
    description: "World Class react Developer",
    totalFriends: "100",
    joinedYear: "2021",
    imageUrl:
      "https://images.unsplash.com/photo-1621897100070-055b183ead92?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    fullName: "Kevin Theorz",
    status: "friend",
    description: "World Class react Developer",
    totalFriends: "100",
    joinedYear: "2021",
    imageUrl:
      "https://images.unsplash.com/photo-1621897100070-055b183ead92?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    fullName: "Kega Walorz",
    status: "friend",
    description: "World Class react Developer",
    totalFriends: "100",
    joinedYear: "2021",
    imageUrl:
      "https://images.unsplash.com/photo-1621897100070-055b183ead92?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const App = (props) => {
  const printCard = () => {
    return data.map((item, index) => {
      return <Card userData={item} key={index} />;
    });
  };

  return (
    <GlobalStateProvider>
      <StateContext.Consumer>
        {(context) => {
          console.log(context);
          return (
            <>
              <Header background="black">
                <Logo>Kevin's Store</Logo>
                <nav>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                </nav>
              </Header>
              <Counter />
              <main
                style={{
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "960px",
                  padding: "20px 20px",
                }}
              ></main>
              <h1>Test: {context.name}</h1>
              <A>
                <B></B>
              </A>

              <div className="ui link cards">{printCard()}</div>
            </>
          );
        }}
      </StateContext.Consumer>
    </GlobalStateProvider>
  );
};

export default App;
