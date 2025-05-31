import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a> | <a href="/posts">Posts</a> | <a href="/users">Users</a>
      </nav>
    </header>
  );
};

export default Header;
