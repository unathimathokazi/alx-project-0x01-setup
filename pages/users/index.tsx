<<<<<<< HEAD
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState(posts);

  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([newUserWithId as UserProps, ...users]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {users.map((user, key) => (
            <UserCard {...user} key={key} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
=======
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
>>>>>>> 148ea2dbf4ee435579da07149f7e566a0ef24001
    </div>
  );
};

<<<<<<< HEAD
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return { props: { posts } };
}

export default Users;
=======
export default UsersPage;
>>>>>>> 148ea2dbf4ee435579da07149f7e566a0ef24001
