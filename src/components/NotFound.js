import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className='cont-to-center'>
      <h2>
        La risorsa che hai digitato non si trova su questo dominio... ma
        controlla lo spelling, potrebbe esssere solo un errore di battitura!
      </h2>
      <Link to='/'>
        <button>Torna alla home</button>
      </Link>
    </div>
  );
};

export default Notfound;
