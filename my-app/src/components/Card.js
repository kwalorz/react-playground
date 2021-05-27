import React from "react";

export default function (props) {
  return (
    <div className="card">
      <div className="image">
        <img src="https://images.unsplash.com/photo-1518242340236-fd1dd715ba89?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </div>
      <div className="content">
        <div className="header">Matt Giampietro</div>
        <div className="meta">
          <a>Friends</a>
        </div>
        <div className="description">
          Matthew is an interior designer living in New York.
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">Joined in 2013</span>
        <span>
          <i className="user icon" />
          75 Friends
        </span>
      </div>
    </div>
  );
}
