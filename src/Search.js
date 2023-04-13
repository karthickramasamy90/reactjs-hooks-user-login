import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

  let apiUrl = "https://jsonplaceholder.typicode.com/users";
  function handleOnchangeEvent() {
    // Fetch users list from GET API
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }

  useEffect(() => handleOnchangeEvent, []);

  // console.log(JSON.stringify(items));
  const searchUser = (event) => {
    let searchedUser = event.target.value.toLowerCase();

    const selectedUser = items.filter((item) =>
      item.name.toLowerCase().includes(searchedUser)
    );

    console.log("selectedUser", selectedUser);
  };

  return (
    <div className="App">
      <label>Search user</label>
      <input type="search" onChange={searchUser} />
    </div>
  );
}

export default App;
