import { useEffect, useState } from 'react';
import Bloglist from './Bloglist';
import ChooseAuthor from './ChooseAuthor';
import Loading from './Loading';
import useFetch from '../costomHooks/UseFetch';

const Home = () => {
  // VARS
  const [i, setI] = useState(0);
  const [data, setData] = useState(null);
  const [chosenAut, setChosenAut] = useState('');
  // comming from costum hook
  const { data: blogs, isPending, error } = useFetch(
    'http://localhost:8000/blogs'
  );
  // METHODS
  // const handleDelete = id => setData(blogs.filter(e => e.id !== id));
  // TEMPLATE
  return (
    <div className='home'>
      {isPending && <Loading />}
      {error && <div className='error'>{error}</div>}
      {!isPending && (
        <ChooseAuthor setChosenAut={setChosenAut} chosenAut={chosenAut} />
      )}
      {blogs && (
        <Bloglist
          classList='bolgEl'
          blogs={blogs}
          title='I componimenti'
          // handleDelete={handleDelete}
          setData={setData}
        />
      )}
    </div>
  );
};
export default Home;

// TO CREATE A LOCAL SERVER THAT RETURNS data/db -> npx json-server --watch data/db.json --port 8000
// TO INSTALL ROUTER -> npm install react-router-dom@5
