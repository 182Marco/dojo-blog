import { useState } from 'react';
import Try from './Try';

const Prova = () => {
  let [x, setX] = useState(`Ciao`);
  const cambiaSaluto = () => {
    x === `Ciao` ? setX(`Buongiorno`) : setX(`Ciao`);
  };
  return (
    <div>
      <h2>{x}</h2>
      <button onClick={cambiaSaluto}>cambia Il saluto</button>
      <Try />
    </div>
  );
};

export default Prova;
