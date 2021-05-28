import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.userData.imageUrl} alt={props.userData.fullName} />
      </div>
      <div className="content">
        <div className="header">{props.userData.fullName}</div>
        <div className="meta">
          <a>{props.userData.status}</a>
        </div>
        <div className="description">{props.userData.description}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Joined in {props.userData.joinedYear}
        </span>
        <span>
          <i className="user icon" />
          {props.userData.totalFriends}
        </span>
      </div>
    </div>
  );
};

export default Card;
