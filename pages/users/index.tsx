import React from 'react';

const UsersPage: React.FC = () => {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
