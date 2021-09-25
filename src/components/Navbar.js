import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  // VARIABILES
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');

  return (
    <nav className='navbar content'>
      <h1>Il blog della grande poesia</h1>
      <ul className='links'>
        <li>
          <Link to='/' className={splitLocation[1] === '' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/Create-New-Blog'
            className={splitLocation[1] === 'Create-New-Blog' ? 'active' : ''}
          >
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
