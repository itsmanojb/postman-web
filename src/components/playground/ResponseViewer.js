import { useState } from 'react';
import styles from './playground.module.css';
import ResponseWrapper from './response/ResponseWrapper';

const ResponseViewer = ({ onToggle, splitMode }) => {
  const [miniView, setMiniView] = useState(false);
  const [response, setResponse] = useState({});

  const toggleView = () => {
    setMiniView(!miniView);
    onToggle(!miniView);
  };

  return (
    <div
      className={
        miniView ? styles.response_panel_small : styles.response_panel__blank
      }
    >
      {response ? (
        <ResponseWrapper view={splitMode} reload={false} />
      ) : (
        <>
          <div className={styles.response_toggle_btn}>
            <span>Response</span>
            {splitMode === 'H' && (
              <span
                onClick={toggleView}
                className={
                  miniView ? styles.toggle_arrow : styles.toggle_arrow_up
                }
              >
                ▼
              </span>
            )}
          </div>
          {!miniView && (
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
