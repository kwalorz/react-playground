import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import Card from "./Card";

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
