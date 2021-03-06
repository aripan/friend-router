import React from "react";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const friendStyle = {
    border: "1px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={friendStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>
        <Link to={`/friends/${id}`}>Details of friend</Link>
      </p>
    </div>
  );
};

export default Friend;
