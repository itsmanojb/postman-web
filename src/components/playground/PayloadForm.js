import { useContext, useState } from 'react';
import { Context } from '../../contexts/Store';
import AuthHeaders from './AuthHeaders';
import styles from './playground.module.css';
import QueryParamsTable from './QueryParamsTable';
import RequestBody from './RequestBody';
import RequestHeadersTable from './RequestHeadersTable';

const PayloadForm = () => {
  const { state } = useContext(Context);
  const [apiSettings, setApiSettings] = useState(
    state.formData.payload ? 'body' : 'qp'
  );
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
          {state.auth && <span className={styles.green_dot}></span>}
        </li>
        <li
          onClick={(e) => setApiSettings('headers')}
          className={
            apiSettings === 'headers'
              ? styles.payload_tab_active
              : styles.payload_tab
          }
        >
          Headers{' '}
          {state.requestHeaders.length > 0 && (
            <span className={styles.green_dot}></span>
          )}
        </li>
        <li
          onClick={(e) => setApiSettings('body')}
          className={
            apiSettings === 'body'
              ? styles.payload_tab_active
              : styles.payload_tab
          }
        >
          Body{' '}
          {state.formData.payload && <span className={styles.green_dot}></span>}
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
            return <RequestHeadersTable />;
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
