import RightPanel from './RightPanel';
import Toolbar from './Toolbar';
import styles from './playground.module.css';
import { useState } from 'react';
import URLBox from './URLBox';
import PayloadForm from './PayloadForm';
import ResponseViewer from './ResponseViewer';

const Playground = ({ split }) => {
  const [queryParams, setQueryParams] = useState('');
  const [reqHeaders, setRequestHeaders] = useState([]);
  const [panelOpened, setPanelOpened] = useState(false);
  const [payloadSize, setPayloadSize] = useState('small');

  const togglePayloadView = (collapsed) => {
    setPayloadSize(collapsed ? 'full' : 'small');
  };

  return (
    <main className={styles.wrapper}>
      <Toolbar />
      <div className={panelOpened ? styles.main : styles.main_collapsed}>
        <div className={styles.container}>
          <div className={styles.panelheader}>
            <div className={styles.title_area}>
              <h2>Untitled Request</h2>
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
          <URLBox params={queryParams} headers={reqHeaders} />
          <div
            className={
              split === 'V' ? styles.panel_vertical : styles.panel_horizontal
            }
          >
            <PayloadForm
              viewMode={payloadSize}
              splitMode={split}
              onParamsUpdate={setQueryParams}
              onHeadersUpdate={setRequestHeaders}
            />
            <ResponseViewer onToggle={togglePayloadView} splitMode={split} />
          </div>
        </div>
        <div
          className={panelOpened ? styles.panel_opened : styles.panel_collapsed}
        >
          <RightPanel onToggle={setPanelOpened} />
        </div>
      </div>
    </main>
  );
};

export default Playground;
