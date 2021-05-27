import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import Card from "./Card";

let data = {
  fullName: "Kevin Walorz",
  status: "friend",
  description: "World Class react Developer",
  totalFriends: "100",
  joinedYear: "2021",
  imageUrl:
    "https://images.unsplash.com/photo-1621897100070-055b183ead92?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
};

export default function () {
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
      <main
        style={{ margin: "20px auto", width: "100%", maxWidth: "960px" }}
      ></main>
      <div className="ui link cards">
        <Card userData={data} />
      </div>
    </>
  );
}
