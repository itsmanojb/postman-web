import { useContext } from 'react';
import { Context } from '../../Store';
import styles from './playground.module.css';

const RequestBody = () => {
  const { state } = useContext(Context);
  return (
    <div
      className={
        state.responsePanelMinimized || state.splitView === 'V'
          ? styles.payload_wrapper_full
          : styles.payload_wrapper
      }
    ></div>
  );
};

export default RequestBody;
