import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  const friendStyle = {
    border: "1px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };

  const showDetails = (id) => {
    history.push(`/friends/${id}`);
  };
  return (
    <div style={friendStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <Link to={`/friends/${id}`}>Details of friend</Link>
      <button onClick={() => showDetails(id)}>Click Me</button>
    </div>
  );
};

export default Friend;
