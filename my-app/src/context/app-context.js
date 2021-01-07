import {createContext} from 'react';

export const AppContext = createContext({
  accessToken: null,
  login: () => {
  }
});
