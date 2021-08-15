import { createContext, useEffect, useReducer } from 'react';
import HistoryReducer from './HistoryReducer';

const initialState = [];

const localState = JSON.parse(localStorage.getItem('_post_man_history'));
const History = ({ children }) => {
  const [apis, dispatch] = useReducer(
    HistoryReducer,
    localState || initialState
  );
  useEffect(() => {
    localStorage.setItem('_post_man_history', JSON.stringify(apis));
  }, [apis]);

  return (
    <HistoryContext.Provider value={{ apis, dispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const HistoryContext = createContext(initialState);
export default History;
