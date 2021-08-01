import styles from './playground.module.css';

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.tabs_wrapper}></div>
      <div className={styles.env_menu}>
        <select name="" id="">
          <option value="">No Environment</option>
        </select>
        <button type="button">
          <i className="feather-eye"></i>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
