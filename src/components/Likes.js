import { useState } from 'react';

const Likes = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='likes box'>
      <button
        className='btn count'
        onClick={() => (count > 0 ? setCount(count - 1) : null)}
      >
        -
      </button>
      <span className='count'>{count}</span>
      <button className='btn count' onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Likes;
