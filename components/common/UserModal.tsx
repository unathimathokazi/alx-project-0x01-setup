import { UserData, UserModalProps } from "@/interfaces";
import { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
    address: {
      street: "", suite: "", city: "", zipcode: "",
      geo: { lat: "", lng: "" }
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} className="mb-2 w-full border px-3 py-2 rounded" />
          <input name="username" placeholder="Username" onChange={handleChange} className="mb-2 w-full border px-3 py-2 rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="mb-2 w-full border px-3 py-2 rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="mb-2 w-full border px-3 py-2 rounded" />
          <input name="website" placeholder="Website" onChange={handleChange} className="mb-2 w-full border px-3 py-2 rounded" />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-600">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
