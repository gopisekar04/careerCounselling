import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function BlogPostRenderer({ blogPost }) {
  if (!blogPost) return <p>No blog post available.</p>;

  const formattedBlogPost = blogPost.replace(/\\n/g, "\n");

  return (
    <div className="markdown-content">
      <ReactMarkdown children={formattedBlogPost} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default BlogPostRenderer;
