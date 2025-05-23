// import BlogCard from "@/features/blog/components/BlogCard/BlogCard";
// import BlogImage from "@/features/blog/components/BlogImage/BlogImage";
// import BlogList from "@/features/blog/components/BlogList/BlogList";

// import { BlogCard, BlogImage, BlogList } from "@/features/blog/components";

import * as Blog from "@/features/blog/components";
import React from "react";

const BlogPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const posts = await fetch(`${baseUrl}/api/blog`, {
    cache: "no-store",
  });

  const data = await posts.json();
  console.log(data);

  return (
    <div>
      <Blog.BlogImage />
      <Blog.BlogList posts={data} />
      <Blog.BlogCard />
    </div>
  );
};

export default BlogPage;
