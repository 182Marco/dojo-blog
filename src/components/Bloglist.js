import Likes from './Likes';
import { Link } from 'react-router-dom';

const Bloglist = ({ blogs, title }) => {
  // const [reactiveBlogs, setReactiveBlogs] = useState([...blogs]);
  // FUNCTIONS
  let shortenBlogs = blogs.map(obj => {
    const maxLength = 100;
    // first cut without even if we're in the middle of a word
    const cut = obj.body.substr(0, maxLength);
    // re-trim if we are in the middle of a word
    let shortBody = cut.substr(0, Math.min(cut.length, cut.lastIndexOf(' ')));
    // add ellipsis
    shortBody = `${shortBody} ...`;
    return {
      ...obj,
      body: shortBody,
    };
  });
  //

  // TEMPLATE
  return (
    <div className='blog-preview'>
      <h2>{title}</h2>
      {shortenBlogs &&
        shortenBlogs.map(blog => (
          <article className='blog-preview' key={`__${blog.id}`}>
            <h3 className='artTitle'>{blog.title}</h3>
            {/* map inside map to break all lines of each
          poetry inside a single p line */}
            {blog.body.split('\n').map((line, i) => {
              return <p key={i}>{line}</p>;
            })}
            <p className='author'>
              Scritto da: <br /> <em> {blog.author} </em>
            </p>
            <div>
              likes: <Likes></Likes>
            </div>
            <Link to={`/details-of-blog-number/${blog.id}`}>
              <button className='BtnLink'>vai al componenimento</button>
            </Link>
          </article>
        ))}
    </div>
  );
};

export default Bloglist;
