import './navbar';
import Navbar from './navbar';
import Home from './Home';

function App() {
  const likes = 50;
  const link = `http://www.google.com`;
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
