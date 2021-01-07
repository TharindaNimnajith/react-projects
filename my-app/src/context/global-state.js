import React, {useState} from 'react';
import {AppContext} from './app-context';

const GlobalState = props => {
  const [accessToken, setAccessToken] = useState('');

  const login = accessToken => {
    console.log(accessToken);
    setAccessToken(accessToken);
  };

  return (
    <AppContext.Provider
      value={{
        accessToken: accessToken,
        appContextLogin: login
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default GlobalState;
