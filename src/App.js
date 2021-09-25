import './components/Navbar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetail from './components/BlogDetail';
import Notfound from './components/NotFound';
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
            <Route path='/details-of-blog-number/:id'>
              <BlogDetail />
            </Route>
            <Route path='*'>
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
// TO CREATE A LOCAL SERVER THAT RETURNS data/db -> npx json-server --watch data/db.json --port 8000
export default App;
