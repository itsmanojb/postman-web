import styles from './layout.module.css';

const Sidebar = () => {
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
            <li className={styles.sidebar_menu_active}>
              <i className="feather-folder"></i>
              <span>Collections</span>
            </li>
            <li className={styles.sidebar_menu}>
              <i className="feather-command"></i>
              <span>APIs</span>
            </li>
            <li className={styles.sidebar_menu}>
              <i className="feather-box"></i>
              <span>Environments</span>
            </li>
            <li className={styles.sidebar_menu}>
              <i className="feather-server"></i>
              <span>Mock Servers</span>
            </li>
            <li className={styles.sidebar_menu}>
              <i className="feather-activity"></i>
              <span>Monitors</span>
            </li>
            <li className={styles.sidebar_menu}>
              <i className="feather-clock"></i>
              <span>History</span>
            </li>
          </ul>
        </div>
        <div className={styles.sidebar_tab_panels}></div>
      </div>
    </div>
  );
};

export default Sidebar;
