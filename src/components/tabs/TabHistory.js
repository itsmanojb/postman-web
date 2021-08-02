import styles from './tab.module.css';
import image from '../../images/no-history.png';

const TabHistory = () => {
  return (
    <div className={styles.empty_tab}>
      <img src={image} alt="" />
      <h4>You haven't sent any requests.</h4>
      <p>Any request you send in this workspace will appear here.</p>
      <span>Show me how</span>
    </div>
  );
};

export default TabHistory;
