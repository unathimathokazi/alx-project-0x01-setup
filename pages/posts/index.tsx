import PostCard from "@/components/common/PostCard";
<<<<<<< HEAD
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [localPosts, setLocalPosts] = useState(posts);

  const handleAddPost = (newPost: PostData) => {
    const newPostWithId = { ...newPost, id: localPosts.length + 1 };
    setLocalPosts([newPostWithId, ...localPosts]);
  };

=======
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
>>>>>>> 148ea2dbf4ee435579da07149f7e566a0ef24001
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
<<<<<<< HEAD
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {localPosts.map((post, key) => (
            <PostCard {...post} key={key} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
=======
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts?.map(({ title, body, userId, id }, key) => (
            <PostCard title={title} body={body} userId={userId} id={id} key={key} />
          ))}
        </div>
      </main>
>>>>>>> 148ea2dbf4ee435579da07149f7e566a0ef24001
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
<<<<<<< HEAD
  return { props: { posts } };
=======

  return {
    props: {
      posts,
    },
  };
>>>>>>> 148ea2dbf4ee435579da07149f7e566a0ef24001
}

export default Posts;
