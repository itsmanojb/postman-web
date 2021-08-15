import { useContext, useState } from 'react';
import { Context } from '../../contexts/Store';
import styles from './playground.module.css';

const AuthHeaders = () => {
  const { state, dispatch } = useContext(Context);

  const [bearer, setBearer] = useState(() => {
    if (state.auth === 'bearer') {
      return state.authHeader.split(':')[1].split(' ')[1] || '';
    }
    return '';
  });
  const [authKey, setAuthKey] = useState(() => {
    if (state.auth === 'apiKey') {
      return state.authHeader.split(':')[0];
    }
    return '';
  });
  const [authValue, setAuthValue] = useState(() => {
    if (state.auth === 'apiKey') {
      return state.authHeader.split(':')[1] || '';
    }
    return '';
  });

  const setAuthHeader = (key, e) => {
    if (key === 'bearer') {
      setBearer(e);
      dispatch({
        type: 'SET_AUTH_HEADER',
        payload: `Authorization:Bearer ${e}`,
      });
    } else {
      if (key === 'authKey') {
        setAuthKey(e);
        dispatch({
          type: 'SET_AUTH_HEADER',
          payload: `${e}:${authValue}`,
        });
      }
      if (key === 'authValue') {
        setAuthValue(e);
        if (authKey) {
          dispatch({
            type: 'SET_AUTH_HEADER',
            payload: `${authKey}:${e}`,
          });
        }
      }
    }
  };

  return (
    <div
      className={
        state.responsePanelMinimized || state.splitView === 'V'
          ? styles.payload_wrapper_full
          : styles.payload_wrapper
      }
    >
      <div
        className={
          state.splitView === 'V'
            ? styles.auth_two_col_vert
            : styles.auth_two_col
        }
      >
        <div
          className={
            state.splitView === 'V'
              ? styles.auth_left_col_vert
              : styles.auth_left_col
          }
        >
          <div>
            <span>Type</span>
            <select
              value={state.auth}
              onChange={(e) =>
                dispatch({ type: 'SET_AUTH', payload: e.target.value })
              }
            >
              <option value="">No Auth</option>
              <option value="bearer">Bearer Token</option>
              <option value="apiKey">API Key</option>
              <option disabled>Basic Auth</option>
              <option disabled>Digest Auth</option>
              <option disabled>OAuth 1.0</option>
              <option disabled>OAuth 2.0</option>
              <option disabled>Hawk Authentication</option>
              <option disabled>AWS Signature</option>
            </select>
          </div>
          {state.auth !== '' && (
            <p>
              The authorization header will be automatically generated when you
              send the request.
              <span>Learn more about authorization</span>
            </p>
          )}
        </div>
        <div
          className={
            state.auth === ''
              ? styles.auth_right_col_blank
              : styles.auth_right_col
          }
        >
          {state.auth === '' && (
            <p>
              This request does not use any authorization.
              <span>Learn more about authorization</span>
            </p>
          )}
          {state.auth === 'bearer' && (
            <div>
              <span>Token</span>
              <div>
                <textarea
                  value={bearer}
                  spellCheck={false}
                  onChange={(e) => setAuthHeader('bearer', e.target.value)}
                />
              </div>
            </div>
          )}
          {state.auth === 'apiKey' && (
            <>
              <div>
                <span>Key</span>
                <div>
                  <input
                    value={authKey}
                    spellCheck={false}
                    onChange={(e) => setAuthHeader('authKey', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <span>Value</span>
                <div>
                  <input
                    value={authValue}
                    spellCheck={false}
                    onChange={(e) => setAuthHeader('authValue', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <span>Add to</span>
                <div>
                  <select
                    value={state.authLocation}
                    onChange={(e) =>
                      dispatch({
                        type: 'SET_AUTH_LOCATION',
                        payload: e.target.value,
                      })
                    }
                  >
                    <option value="header">Header</option>
                    <option value="qp">Query Params</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthHeaders;
