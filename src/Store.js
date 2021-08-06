import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
  sideDrawerOpened: false,
  infoPanelOpened: false,
  splitView: 'H',
  responsePanelMinimized: false,
  formSubmitted: false,
  responseUI: false,
  apiResponse: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
