import {createContext} from 'react';

export const AppContext = createContext({
  accessToken: '',
  appContextLogin: accessToken => console.log('AppContext', accessToken)
});
