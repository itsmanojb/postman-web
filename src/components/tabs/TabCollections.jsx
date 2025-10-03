import styles from './tab.module.css';
import image from '../../images/no-collection.png';

const TabCollections = () => {
  return (
    <div className={styles.empty_tab}>
      <img src={image} alt="" />
      <h4>You don’t have any collections.</h4>
      <p>
        Collections let you group related requests, making them easier to access
        and run.
      </p>
      <span>Create Collection</span>
    </div>
  );
};

export default TabCollections;
