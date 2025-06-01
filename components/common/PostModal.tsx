import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 mb-1">User ID</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 mb-1">Body</label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
