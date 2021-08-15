import { useContext } from 'react';
import { Context } from '../../contexts/Store';
import styles from './playground.module.css';
import ResponseWrapper from './response/ResponseWrapper';

const ResponseViewer = () => {
  const { state, dispatch } = useContext(Context);

  const toggleView = () => {
    dispatch({
      type: 'SET_RESPONSE_PANEL',
      payload: !state.responsePanelMinimized,
    });
  };

  return (
    <div
      className={
        state.responsePanelMinimized
          ? styles.response_panel_small
          : styles.response_panel__blank
      }
    >
      {state.responseUI ? (
        <ResponseWrapper />
      ) : (
        <>
          <div className={styles.response_toggle_btn}>
            <span>Response</span>
            {state.splitView === 'H' && (
              <span
                onClick={toggleView}
                className={
                  state.responsePanelMinimized
                    ? styles.toggle_arrow
                    : styles.toggle_arrow_up
                }
              >
                ▼
              </span>
            )}
          </div>
          {!state.responsePanelMinimized && (
            <div className={styles.response_ph}>
              <div>Enter the URL and click Send to get a response.</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ResponseViewer;
