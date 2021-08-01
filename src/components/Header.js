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
    </header>
  );
};

export default Header;
