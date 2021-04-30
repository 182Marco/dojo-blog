import './navbar';
import Navbar from './navbar';
import Home from './Home';
import { useState } from 'react';

function App() {
  const [nomeTizo, set] = useState('Ugo');
  function cambiaNome() {
    nomeTizo == 'Ugo' ? set('Edo') : set('Ugo');
  }
  const likes = 50;
  const link = `http://www.google.com`;
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
        <p> like: {likes} times</p>
        <a href={link}>link alla pagina di google</a>
        <h1>{nomeTizo}</h1>
        <button onClick={cambiaNome}>
          Chiama la cazzo di funzione per cambiare il nome sopra
        </button>
      </div>
    </div>
  );
}

export default App;
