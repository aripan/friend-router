import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Friend from "./components/Friend/Friend";

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="App">
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}

export default App;
