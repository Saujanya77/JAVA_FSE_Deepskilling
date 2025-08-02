import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: "React vs Vue", views: 1500 },
    { id: 2, title: "Why Learn JavaScript", views: 3200 }
  ];

  return (
    <div>
      <h2>📝 Blog Posts</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Views: {blog.views}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
