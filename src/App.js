import './navbar';
import Navbar from './navbar';
import Home from './Home';

function App() {
  const link = `http://www.google.com`;
  return (
    <div className='App'>
      <Navbar homeLink={link} />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
