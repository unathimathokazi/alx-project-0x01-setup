import React from 'react';

type PostCardProps = {
  title: string;
  summary: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, summary }) => {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
};

export default PostCard;
