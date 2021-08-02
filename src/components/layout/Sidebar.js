import { useState } from 'react';
import styles from './layout.module.css';
import TabAPIs from '../tabs/TabAPIs';
import TabCollections from '../tabs/TabCollections';
import TabEnv from '../tabs/TabEnv';
import TabHistory from '../tabs/TabHistory';
import TabMonitors from '../tabs/TabMonitors';
import TabServers from '../tabs/TabServers';

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState('collections');

  const setCurrentTab = (e) => {
    setSelectedTab(e);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <div className={styles.sidebar_title}>
          <i className="feather-user"></i>
          <span>Name</span>
        </div>
        <div className={styles.sidebar_actions}>
          <button type="button">New</button>
          <button type="button">Import</button>
        </div>
      </div>
      <div className={styles.sidebar_tabs}>
        <div className={styles.sidebar_tab_buttons}>
          <ul>
            <li
              onClick={(e) => setCurrentTab('collections')}
              className={
                selectedTab === 'collections'
                  ? styles.sidebar_menu_active
                  : styles.sidebar_menu
              }
            >
              <i className="feather-folder"></i>
              <span>Collections</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('api')}
              className={
                selectedTab === 'api'
                  ? styles.sidebar_menu_active
                  : styles.sidebar_menu
              }
            >
              <i className="feather-command"></i>
              <span>APIs</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('env')}
              className={
                selectedTab === 'env'
                  ? styles.sidebar_menu_active
                  : styles.sidebar_menu
              }
            >
              <i className="feather-box"></i>
              <span>Environments</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('servers')}
              className={
                selectedTab === 'servers'
                  ? styles.sidebar_menu_active
                  : styles.sidebar_menu
              }
            >
              <i className="feather-server"></i>
              <span>Mock Servers</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('monitors')}
              className={
                selectedTab === 'monitors'
                  ? styles.sidebar_menu_active
                  : styles.sidebar_menu
              }
            >
              <i className="feather-activity"></i>
              <span>Monitors</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('history')}
              className={
                selectedTab === 'history'
                  ? styles.sidebar_menu_active
                  : styles.sidebar_menu
              }
            >
              <i className="feather-clock"></i>
              <span>History</span>
            </li>
          </ul>
        </div>
        <div className={styles.sidebar_tab_panels}>
          {(() => {
            switch (selectedTab) {
              case 'api':
                return <TabAPIs />;
              case 'env':
                return <TabEnv />;
              case 'servers':
                return <TabServers />;
              case 'monitors':
                return <TabMonitors />;
              case 'history':
                return <TabHistory />;
              default:
                return <TabCollections />;
            }
          })()}

          <div className={styles.sidebar_tab_panel}></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
