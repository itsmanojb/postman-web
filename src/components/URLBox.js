import styles from './playground.module.css';

const URLBox = () => {
  return (
    <div className={styles.url_box}>
      <div>
        <select>
          <option value="">Select</option>
        </select>
        <input type="url" />
        <button type="button">Send</button>
      </div>
    </div>
  );
};

export default URLBox;
