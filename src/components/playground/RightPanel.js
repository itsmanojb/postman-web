import { useContext, useState } from 'react';
import { Context } from '../../contexts/Store';
import styles from './playground.module.css';

const RightPanel = () => {
  const { dispatch } = useContext(Context);
  const [panelOpen, setPanelOpen] = useState('');

  const showPanel = (e) => {
    setPanelOpen(e);
    dispatch({ type: 'SET_INFOPANEL', payload: true });
  };

  const closePanel = (e) => {
    setPanelOpen('');
    dispatch({ type: 'SET_INFOPANEL', payload: false });
  };

  return (
    <>
      <ul>
        <li
          className={
            panelOpen === 'Documentation' ? styles.right_panel_active_link : ''
          }
          onClick={(e) => showPanel('Documentation')}
        >
          <i className="feather-file-text"></i>
        </li>
        <li
          className={
            panelOpen === 'Comments' ? styles.right_panel_active_link : ''
          }
          onClick={(e) => showPanel('Comments')}
        >
          <i className="feather-message-circle"></i>
        </li>
        <li
          className={
            panelOpen === 'Code snippet' ? styles.right_panel_active_link : ''
          }
          onClick={(e) => showPanel('Code snippet')}
        >
          <i className="feather-code"></i>
        </li>
        <li
          className={
            panelOpen === 'Request details'
              ? styles.right_panel_active_link
              : ''
          }
          onClick={(e) => showPanel('Request details')}
        >
          <i className="feather-info"></i>
        </li>
      </ul>
      {panelOpen !== '' && (
        <div className={styles.info_drawer}>
          <div className={styles.info_drawer_header}>
            <span>{panelOpen}</span>
            <button type="button" onClick={closePanel}>
              &times;
            </button>
          </div>
          <div className={styles.info_drawer_scroll}>
            <div className={styles.blank_drawer}>Not Available</div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightPanel;
