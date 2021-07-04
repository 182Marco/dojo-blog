import { useState } from 'react';
import Bloglist from './Bloglist';
import ChooseAuthor from './ChooseAuthor';
import Loading from './Loading';
import useFetch from './UseFetch';

const Home = () => {
  // VARS
  const [author, setAuthor] = useState(['Pascoli', 'Petrarca', 'Leopardi']);
  const [i, setI] = useState(0);
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  // comming from costum hook
  const { data: blogs, isPending, error } = useFetch(
    'http://localhost:8000/blogs'
  );
  // METHODS
  const handleDelete = id => setData(blogs.filter(e => e.id !== id));
  const filterAuthor = blogs ? blogs.filter(e => e.author == author[i]) : [];
  // TEMPLATE
  return (
    <div className='home'>
      {blogs && (
        <Bloglist
          classList='bolgEl'
          blogs={blogs}
          title='I componimenti'
          handleDelete={handleDelete}
          setData={setData}
        />
      )}
      {isPending && <Loading />}
      {!isPending && <ChooseAuthor author={author} i={i} setI={setI} />}
      {blogs && (
        <Bloglist
          classList='bolgEl'
          title={`Le poesie di ${author[i]}`}
          blogs={filterAuthor}
          handleDelete={handleDelete}
          setData={setData}
        />
      )}
      {error && <div className='error'>{error}</div>}
    </div>
  );
};
export default Home;

// TO CREATE A LOCAL SERVER THAT RETURNS data/db -> npx json-server --watch data/db.json --port 8000
// TO INSTALL ROUTER -> npm install react-router-dom@5
