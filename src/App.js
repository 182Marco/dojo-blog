import './navbar';
import Navbar from './navbar';
import Home from './Home';

function App() {
  const likes = 50;
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
        <p> like: {likes} times</p>
      </div>
    </div>
  );
}

export default App;
