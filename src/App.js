import React, { useState } from 'react';

import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => [...prevUsersList, { id: Math.random().toString(), name: uName, age: uAge }])
  }

  return (
    <div className="App">
      <h1 style={{ color: "#ccc", marginLeft: "27rem" }}>User addition</h1>
      <AddUser onAddUser={ addUserHandler } />
      <UsersList users={ usersList } />
    </div>
  );
}

export default App;
