import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default BlogList;
