import './navbar';
import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
// import to use router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // to make router accessibile from all components
    // you have wrap all with a Router Component
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          {/* switch is a component that makes sure 
          that any one route shows at any one time */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Create-New-Blog'>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
