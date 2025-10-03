import styles from './tab.module.css';
import image from '../../images/no-monitors.png';

const TabMonitors = () => {
  return (
    <div className={styles.empty_tab}>
      <img src={image} alt="" />
      <h4>You have no monitors set up.</h4>
      <p>
        A monitor lets you run a collection periodically to check for its
        performance and response.
      </p>
      <span>Create a monitor</span>
    </div>
  );
};

export default TabMonitors;
