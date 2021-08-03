import styles from './playground.module.css';
import QueryParamsTable from './QueryParamsTable';

const PayloadForm = ({ viewMode, splitMode, onUpdate }) => {
  return (
    <div className={styles.payload_panel}>
      <ul
        className={
          splitMode === 'H' ? styles.payload_types : styles.payload_types_small
        }
      >
        <li className={styles.payload_tab_active}>Params</li>
        <li className={styles.payload_tab}>Authorization</li>
        <li className={styles.payload_tab}>Headers</li>
        <li className={styles.payload_tab}>Body</li>
        <li className={styles.payload_tab_disabled}>Pre-request Script</li>
        <li className={styles.payload_tab_disabled}>Tests</li>
        <li className={styles.payload_tab_disabled}>Settings</li>
      </ul>
      <QueryParamsTable
        viewMode={viewMode}
        splitMode={splitMode}
        onParamsChange={onUpdate}
      />
    </div>
  );
};

export default PayloadForm;
