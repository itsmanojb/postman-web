import styles from './tab.module.css';
import image from '../../images/no-apis.png';

const TabAPIs = () => {
  return (
    <div className={styles.empty_tab}>
      <img src={image} alt="" />
      <h4>No APIs yet.</h4>
      <p>
        APIs define related collections and environments under a consistent
        schema.
      </p>
      <span>Create an API</span>
    </div>
  );
};

export default TabAPIs;
