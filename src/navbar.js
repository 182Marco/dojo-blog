const GogLink = `http://www.google.com`;

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Il blog della grande poesia</h1>
      <div className='links'>
        <a href={GogLink}>Home google</a>
        <a href=''>New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
