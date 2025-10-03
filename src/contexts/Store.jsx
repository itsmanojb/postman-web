import { createContext, useEffect, useReducer } from 'react';
import StoreReducer from './StoreReducer';

const initialState = {
  overviewTab: 'hidden',
  sideDrawerOpened: false,
  sideDrawerTab: 'history',
  infoPanelOpened: false,
  splitView: 'H',
  responsePanelMinimized: false,
  formData: {
    method: '',
    url: '',
    params: '',
    payload: null,
  },
  auth: '',
  authHeader: '',
  authLocation: 'header',
  requestHeaders: [],
  formSubmitted: false,
  responseUI: false,
  apiResponse: {},
  apiError: null,
};

const localState = JSON.parse(sessionStorage.getItem('_post_man'));
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    StoreReducer,
    localState || initialState
  );
  useEffect(() => {
    sessionStorage.setItem('_post_man', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
