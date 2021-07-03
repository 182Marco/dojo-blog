const Navbar = ({ homeLink }) => {
  return (
    <nav className='navbar content'>
      <h1>Il blog della grande poesia</h1>
      <ul className='links'>
        <li>
          <a href={homeLink}>Home</a>
        </li>
        <li>
          {' '}
          <a href=''>New Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
