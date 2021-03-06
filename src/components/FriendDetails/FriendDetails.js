import React from "react";
import { useParams } from "react-router";

const FriendDetails = () => {
  const { friendId } = useParams();
  return (
    <div>
      <h4>Details of {friendId}</h4>
    </div>
  );
};

export default FriendDetails;
