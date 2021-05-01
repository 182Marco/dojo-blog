import { useState } from 'react';
import CompReciveProp from './CompReciveProp';

const AncoraUnaProva = () => {
  const [objprops, setP] = useState([
    {
      marca: 'fiat',
      modello: 'punto',
      assicurata: 'genialloyd',
      ruote: 4,
      id: 2870,
    },
    {
      marca: 'ford',
      modello: 'fiesta',
      assicurata: 'Generali',
      ruote: 4,
      id: 63789,
    },
    {
      marca: 'ferrari',
      modello: '458Italia',
      assicurata: 'genialloyd',
      ruote: 4,
      id: 78789,
    },
  ]);
  const clicca = 'clicca qui se non vuoi più essere fanculato';
  const [x, setX] = useState('affanculo');
  const change = () =>
    x === 'affanculo' ? setX('mi spiace') : setX('affanculo');
  return (
    <div>
      <h1>{x}</h1>
      <button onClick={change}>{clicca}</button>
      <CompReciveProp objprops={objprops} />
    </div>
  );
};

export default AncoraUnaProva;
