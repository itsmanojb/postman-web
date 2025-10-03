import styles from './tab.module.css';
import image from '../../images/no-mock-server.png';

const TabServers = () => {
  return (
    <div className={styles.empty_tab}>
      <img src={image} alt="" />
      <h4>You don’t have any mock servers.</h4>
      <p>
        Mock servers let you simulate endpoints and their corresponding
        responses in a collection without actually setting up a back end.
      </p>
      <span>Create Mock Server</span>
    </div>
  );
};

export default TabServers;
