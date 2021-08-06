import { useContext, useState } from 'react';
import { Context } from '../../Store';
import AuthHeaders from './AuthHeaders';
import styles from './playground.module.css';
import QueryParamsTable from './QueryParamsTable';
import RequestBody from './RequestBody';
import RequestHeadersTable from './RequestHeadersTable';

const PayloadForm = ({ onHeadersUpdate }) => {
  const { state } = useContext(Context);
  const [apiSettings, setApiSettings] = useState('qp');
  return (
    <div className={styles.payload_panel}>
      <ul
        className={
          state.splitView === 'H'
            ? styles.payload_types
            : styles.payload_types_small
        }
      >
        <li
          onClick={(e) => setApiSettings('qp')}
          className={
            apiSettings === 'qp'
              ? styles.payload_tab_active
              : styles.payload_tab
          }
        >
          Params
        </li>
        <li
          onClick={(e) => setApiSettings('auth')}
          className={
            apiSettings === 'auth'
              ? styles.payload_tab_active
              : styles.payload_tab
          }
        >
          Authorization
        </li>
        <li
          onClick={(e) => setApiSettings('headers')}
          className={
            apiSettings === 'headers'
              ? styles.payload_tab_active
              : styles.payload_tab
          }
        >
          Headers
        </li>
        <li
          onClick={(e) => setApiSettings('body')}
          className={
            apiSettings === 'body'
              ? styles.payload_tab_active
              : styles.payload_tab
          }
        >
          Body
        </li>
        <li className={styles.payload_tab_disabled}>Pre-request Script</li>
        <li className={styles.payload_tab_disabled}>Tests</li>
        <li className={styles.payload_tab_disabled}>Settings</li>
      </ul>
      {(() => {
        switch (apiSettings) {
          case 'qp':
            return <QueryParamsTable />;
          case 'auth':
            return <AuthHeaders />;
          case 'headers':
            return <RequestHeadersTable onHeadersChange={onHeadersUpdate} />;
          case 'body':
            return <RequestBody />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default PayloadForm;
