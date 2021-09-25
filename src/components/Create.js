import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  // VARIABILES
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [pending, setPending] = useState(false);
  const history = useHistory();
  // FUNCTIONS
  const handleSubmit = e => {
    e.preventDefault();
    setPending(true);
    const poem = { title, body, author };
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(poem),
    }).then(() => {
      // promise is this case is useless for real life
      // -> just to show the loading message on botton
      const promise = () => {
        return new Promise((resolve, reject) =>
          setInterval(() => resolve(), 2000)
        );
      };
      promise()
        .then(() => setPending(false))
        .then(history.push('/'));
    });
    console.log(poem);
  };
  // TEMPLATE
  return (
    <div className='add-poetry-cont'>
      <h2>Aggiungi una nuova poesia</h2>
      <form onSubmit={handleSubmit} action=''>
        <label htmlFor='Title'>titolo: </label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <label htmlFor='body'>testo del componimento: </label>
        <textarea
          onChange={e => setBody(e.target.value)}
          value={body}
          required
          name='body'
          id='body'
          rows='10'
        ></textarea>
        <label htmlFor='author'>autore: </label>
        <input
          onChange={e => setAuthor(e.target.value)}
          type='text'
          value={author}
          id='author'
          required
        />
        {!pending && (
          <button> aggiungi poesia e vedila subito nella home</button>
        )}
        {pending && <button disabled> carico poesia... </button>}
      </form>
    </div>
  );
};

export default Create;
