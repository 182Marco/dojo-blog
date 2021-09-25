import Likes from './Likes';
import { useHistory } from 'react-router-dom';

const SingleBlog = ({ blog }) => {
  // VARIABILES
  const history = useHistory();
  // FUNCTIONS:
  const handleDelete = blogId =>
    fetch(`http://localhost:8000/blogs/${blogId}`, {
      method: 'DELETE',
    }).then(() => history.push('/'));
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
      <button className='BtnLink' onClick={() => handleDelete(blog.id)}>
        cancella il componimento
      </button>
    </article>
  );
};

export default SingleBlog;
