import { useState } from 'react';
import styles from './layout.module.css';
import TabAPIs from '../tabs/TabAPIs';
import TabCollections from '../tabs/TabCollections';
import TabEnv from '../tabs/TabEnv';
import TabHistory from '../tabs/TabHistory';
import TabMonitors from '../tabs/TabMonitors';
import TabServers from '../tabs/TabServers';

const Sidebar = ({ collapsed, onMenuClick }) => {
  const [selectedTab, setSelectedTab] = useState('collections');

  const setCurrentTab = (e) => {
    onMenuClick(true);
    setSelectedTab(e);
  };

  return (
    <div className={styles.sidebar}>
      {!collapsed && (
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
      )}
      <div className={styles.sidebar_tabs}>
        <div
          className={
            collapsed
              ? styles.sidebar_tab_buttons_collapsed
              : styles.sidebar_tab_buttons
          }
        >
          <ul>
            <li
              onClick={(e) => setCurrentTab('collections')}
              className={
                selectedTab === 'collections'
                  ? collapsed
                    ? ''
                    : styles.sidebar_tab_button_active
                  : ''
              }
              title="Collections"
            >
              <i className="feather-folder"></i>
              <span>Collections</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('api')}
              className={
                selectedTab === 'api'
                  ? collapsed
                    ? ''
                    : styles.sidebar_tab_button_active
                  : ''
              }
              title="APIs"
            >
              <i className="feather-command"></i>
              <span>APIs</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('env')}
              className={
                selectedTab === 'env'
                  ? collapsed
                    ? ''
                    : styles.sidebar_tab_button_active
                  : ''
              }
              title="Environments"
            >
              <i className="feather-box"></i>
              <span>Environments</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('servers')}
              className={
                selectedTab === 'servers'
                  ? collapsed
                    ? ''
                    : styles.sidebar_tab_button_active
                  : ''
              }
              title="Mock Servers"
            >
              <i className="feather-server"></i>
              <span>Mock Servers</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('monitors')}
              className={
                selectedTab === 'monitors'
                  ? collapsed
                    ? ''
                    : styles.sidebar_tab_button_active
                  : ''
              }
              title="Monitors"
            >
              <i className="feather-activity"></i>
              <span>Monitors</span>
            </li>
            <li
              onClick={(e) => setCurrentTab('history')}
              className={
                selectedTab === 'history'
                  ? collapsed
                    ? ''
                    : styles.sidebar_tab_button_active
                  : ''
              }
              title="History"
            >
              <i className="feather-clock"></i>
              <span>History</span>
            </li>
          </ul>
        </div>
        {!collapsed && (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
