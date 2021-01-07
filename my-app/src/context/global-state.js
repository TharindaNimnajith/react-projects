import React, {useState} from 'react';
import {AppContext} from './app-context';

export const GlobalState = props => {
  const [accessToken, setAccessToken] = useState('');

  const login = accessToken => {
    setAccessToken(accessToken);
  };

  return (
    <AppContext.Provider
      value={{
        accessToken: accessToken,
        login: login
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
