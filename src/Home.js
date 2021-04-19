import { useState } from 'react';

const Home = () => {
  // HOOK
  const [name, setName] = useState('Pino');
  //   funzione

  const handleClick = () => {
    setName('Marco');
  };

  return (
    <div className='home'>
      <h2>Home page</h2>
      <p>{name}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;
