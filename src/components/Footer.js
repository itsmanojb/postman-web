import styles from './layout.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_menu__left}>
        <li>
          <i className="feather-sidebar"></i>
        </li>
        <li>
          <i className="feather-search"></i> Find and Replace
        </li>
        <li>
          <i className="feather-terminal"></i> Console
        </li>
      </ul>
      <ul className={styles.footer_menu__right}>
        <li>
          <i className="feather-airplay"></i> Runner
        </li>
        <li>
          <i className="feather-trash-2"></i> Trash
        </li>
        <li>
          <i className="feather-credit-card"></i>
        </li>
        <li style={{ paddingInline: '4px' }}>
          <i className="feather-help-circle" style={{ marginRight: 0 }}></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
