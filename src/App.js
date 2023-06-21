/* eslint-disable */ 
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './redux/users/usersSlice';

const App = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const userItems = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    userItems.push(
      <li key={user.login.uuid}>
        {user.name.first} {user.name.last}
      </li>
    );
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>{userItems}</ul>
    </div>
  );
};

export default App;
