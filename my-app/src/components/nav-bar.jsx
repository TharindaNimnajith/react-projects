export const NavBar = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <a className='nav-link active'
           aria-current='page'
           href='/profile'>
          Profile
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link active'
           aria-current='page'
           href='/logout'>
          Logout
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link active'
           aria-current='page'
           href='/login'>
          Login
        </a>
      </li>
    </ul>
  );
};
