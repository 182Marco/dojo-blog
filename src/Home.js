import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

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
        // I'm setting just to see more clearly that is a
        // conditional rendering happenin when we test the app
        setInterval(() => {
          setBlogs(data);
          setPending(false);
        }, 2000);
        // setInterval(() => , 3000);
        // setInterval(function () {
        //   setBlogs(data);
        //   setPending(false);
        // }, 3000);
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
      {!isPending && (
        <div>
          <h3>Seleziona un autore: </h3>
          <p>
            <em> attualmente ricercato:</em> <strong>{author[i]}</strong>{' '}
          </p>
          <button onClick={() => (i < 2 ? setI(i + 1) : setI(0))}>
            clicca qui per passare all'autore successivo ->
          </button>
        </div>
      )}
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
