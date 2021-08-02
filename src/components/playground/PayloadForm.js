import styles from './playground.module.css';

const PayloadForm = ({ viewMode, splitMode }) => {
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
      <div
        className={
          viewMode === 'full' || splitMode === 'V'
            ? styles.payload_wrapper_full
            : styles.payload_wrapper
        }
      >
        <table
          className={
            splitMode === 'H' ? styles.qp_table : styles.qp_table_small
          }
        >
          <caption>Query Params</caption>
          <thead>
            <tr>
              <th></th>
              <th>KEY</th>
              <th>VALUE</th>
              <th>
                <span>DESCRIPTION</span>
                <span className={styles.qp_options}>
                  <span>
                    <i className="feather-more-horizontal"></i>
                  </span>
                  <span>Bulk Edit</span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" placeholder="Key" />
              </td>
              <td>
                <input type="text" placeholder="Value" />
              </td>
              <td>
                <input type="text" placeholder="Description" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayloadForm;
