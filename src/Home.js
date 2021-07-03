import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
import ChooseAuthor from './ChooseAuthor';

const Home = () => {
  // VARS
  const [author, setAuthor] = useState(['Pascoli', 'Petrarca', 'Leopardi']);
  const [i, setI] = useState(0);
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  // CREATED
  // use effect is the same as created in Vue if ypu pass as 2nd value an empty array
  // WHATCHERS
  // -> they work as watchers in vue if we pass dependencies(but also fires at created)
  // -> if you don't pass a 2nd argument they fire at created and at every change of shadow dom
  useEffect(() => {
    fetch(' http://localhost:8000/blogs')
      .then(r => {
        return r.json();
      })
      .then(data => {
        // I'm setting a time out just to see more
        // clearly (when we test the app) that a
        // conditional rendering is happening
        setInterval(() => {
          setBlogs(data);
          setPending(false);
        }, 2000);
      });
  }, []);
  // METHODS
  const handleDelete = id => setBlogs(blogs.filter(e => e.id !== id));
  const filterAuthor = blogs ? blogs.filter(e => e.author == author[i]) : null;
  // TEMPLATE
  return (
    <div className='home'>
      {blogs && (
        <Bloglist
          classList='bolgEl'
          blogs={blogs}
          title='I componimenti'
          handleDelete={handleDelete}
          setBlogs={setBlogs}
        />
      )}
      {isPending && <h2>Loading...</h2>}
      {!isPending && <ChooseAuthor author={author} i={i} setI={setI} />}
      {blogs && (
        <Bloglist
          classList='bolgEl'
          title={`Le poesie di ${author[i]}`}
          blogs={filterAuthor}
          handleDelete={handleDelete}
          setBlogs={setBlogs}
        />
      )}
    </div>
  );
};
export default Home;
