import { useContext, useState } from 'react';
import { Context } from '../../Store';
import RightPanel from './RightPanel';
import Toolbar from './Toolbar';
import styles from './playground.module.css';
import URLBox from './URLBox';
import PayloadForm from './PayloadForm';
import ResponseViewer from './ResponseViewer';

const Playground = ({ triggerSubmit }) => {
  const { state } = useContext(Context);
  const [reqHeaders, setRequestHeaders] = useState([]);

  return (
    <main className={styles.wrapper}>
      <Toolbar />
      <div
        className={state.infoPanelOpened ? styles.main : styles.main_collapsed}
      >
        <div className={styles.container}>
          <div className={styles.panelheader}>
            <div className={styles.title_area}>
              <h2>{state.formData.url || 'Untitled Request'}</h2>
            </div>
            <div className={styles.options_area}>
              <div className={styles.save_options}>
                <button type="button">
                  <i className="feather-save"></i>
                  <span>Save</span>
                </button>
              </div>
              <div className={styles.view_options}>
                <div>
                  <button>
                    <i className="feather-edit-2"></i>
                  </button>
                  <button disabled>
                    <i className="feather-message-square"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <URLBox headers={reqHeaders} onSubmit={triggerSubmit} />
          <div
            className={
              state.splitView === 'V'
                ? styles.panel_vertical
                : styles.panel_horizontal
            }
          >
            <PayloadForm onHeadersUpdate={setRequestHeaders} />
            <ResponseViewer />
          </div>
        </div>
        <div
          className={
            state.infoPanelOpened ? styles.panel_opened : styles.panel_collapsed
          }
        >
          <RightPanel />
        </div>
      </div>
    </main>
  );
};

export default Playground;
