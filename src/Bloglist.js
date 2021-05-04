import { useState } from 'react';

const Bloglist = ({ blogs, title, handleDelete }) => {
  return (
    <div className='blog-preview'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h3 className='artTitle'>{blog.title}</h3>
          <p>{blog.body}</p>
          <p className='author'>
            Scritto da: <br /> <em> {blog.author} </em>
          </p>
          <button onClick={() => handleDelete(blog.id)}>
            cancella il componimento
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
