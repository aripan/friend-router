import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friendDetails, setFriendDetails] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriendDetails(data));
  }, [friendId]);
  return (
    <div>
      <h4>Name: {friendDetails.name}</h4>
      <p>Email: {friendDetails.email}</p>
      <p>Phone: {friendDetails.phone}</p>
      <p>Website: {friendDetails.website}</p>
    </div>
  );
};

export default FriendDetails;
