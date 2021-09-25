import Likes from './Likes';

const SingleBlog = ({ blog }) => {
  //   template
  return (
    <article className='blog-preview'>
      <h3 className='artTitle'>{blog.title}</h3>
      {/*  to break all lines of each
                poetry inside a single p line */}
      {blog.body.split('\n').map((line, i) => {
        return <p key={`indexOfline_${i}`}>{line}</p>;
      })}
      {/* ---- */}
      <p className='author'>
        Scritto da: <br /> <em> {blog.author} </em>
      </p>
      <div>
        likes: <Likes></Likes>
      </div>
    </article>
  );
};

export default SingleBlog;
