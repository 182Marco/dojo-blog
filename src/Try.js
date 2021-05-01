import { useState } from 'react';
import AncoraUnaProva from './AncoraUnaProva';

const Try = () => {
  const [a, setA] = useState('hey');
  const btn = 'Usa questo meraviglioso bottone';
  function funz() {
    a === 'hey' ? setA('bau') : setA('hey');
  }
  return (
    <div>
      <button onClick={funz}>{btn}</button>
      <h1>{a}</h1>
      <AncoraUnaProva />
    </div>
  );
};

export default Try;
