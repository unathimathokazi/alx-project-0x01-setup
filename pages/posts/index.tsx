import React from 'react';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
  const posts = [
    { title: 'First Post', summary: 'This is the first post summary.' },
    { title: 'Second Post', summary: 'This is the second post summary.' },
  ];

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} summary={post.summary} />
      ))}
    </div>
  );
};

export default PostsPage;
