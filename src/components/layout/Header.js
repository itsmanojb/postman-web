import styles from './layout.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header_menu__left}>
        <li>Home</li>
        <li>Workspaces</li>
        <li>Reports</li>
        <li>Explore</li>
      </ul>
      <div>
        <div className={styles.search_box}>
          <i className="feather-search"></i>
          <input type="text" placeholder="Search Postman" />
        </div>
      </div>
      <div className={styles.header_menu__right}>
        <div className={styles.iconMenu}>
          <button>
            <i className="feather-cloud"></i>
          </button>
        </div>
        <div className={styles.inviteMenu}>
          <button>
            <i className="feather-user-plus"></i>
            Invite
          </button>
        </div>
        <div className={styles.iconMenu}>
          <button>
            <i className="feather-rss"></i>
          </button>
        </div>
        <div className={styles.iconMenu}>
          <button>
            <i className="feather-settings"></i>
          </button>
        </div>
        <div className={styles.iconMenu}>
          <button>
            <i className="feather-bell"></i>
          </button>
        </div>
        <div className={styles.userMenu}>
          <div></div>
        </div>
        <div className={styles.upgradeMenu}>
          <div>
            <button>Upgrade</button>
            <button>
              <i className="feather-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
