import styles from './playground.module.css';

const PayloadForm = () => {
  return (
    <div className={styles.payload_panel}>
      <ul className={styles.payload_types}>
        <li className={styles.payload_tab_active}>Params</li>
        <li className={styles.payload_tab}>Authorization</li>
        <li className={styles.payload_tab}>Headers</li>
        <li className={styles.payload_tab}>Body</li>
        <li className={styles.payload_tab_disabled}>Pre-request Script</li>
        <li className={styles.payload_tab_disabled}>Tests</li>
        <li className={styles.payload_tab_disabled}>Settings</li>
      </ul>
    </div>
  );
};

export default PayloadForm;
