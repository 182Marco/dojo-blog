import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar content'>
      <h1>Il blog della grande poesia</h1>
      <ul className='links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Create-New-Blog'>Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
