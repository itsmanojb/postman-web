import styles from './tab.module.css';
import image from '../../images/no-env.png';

const TabEnv = () => {
  return (
    <div className={styles.empty_tab}>
      <img src={image} alt="" />
      <h4>You don’t have any environments.</h4>
      <p>
        An environment is a set of variables that allows you to switch the
        context of your requests.
      </p>
      <span>Create Environment</span>
    </div>
  );
};

export default TabEnv;
