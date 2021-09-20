import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const users = [{
    id: 1,
    name: 'John Doe',
    age: 25
  }, {
    id: 2,
    name: 'Jane Doe',
    age: 35
  }];

  return (
    <div className="App">
      <h1>User addition</h1>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
