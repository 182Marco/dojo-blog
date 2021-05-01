import { useState } from 'react';

const Bloglist = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  console.log(props, blogs);

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h3 className='artTitle'>{blog.title}</h3>
          <p>{blog.body}</p>
          <p className='author'>
            Scritto da: <br /> <em> {blog.author} </em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
