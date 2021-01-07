import {useContext} from 'react';
import {AppContext} from '../context/app-context'

export const NavBar = () => {
  const appContext = useContext(AppContext);
  let token = appContext.accessToken;

  return (
    <ul className='nav'>
      <li className='nav-item'>
        <a className='nav-link active'
           aria-current='page'
           href='/profile'>
          Profile
        </a>
      </li>
      {token !== "" ? (
        <li className='nav-item'>
          <a className='nav-link active'
             aria-current='page'
             href='/logout'>
            Logout
          </a>
        </li>
      ) : (
        <li className='nav-item'>
          <a className='nav-link active'
             aria-current='page'
             href='/login'>
            Login
          </a>
        </li>
      )}
    </ul>
  );
};
