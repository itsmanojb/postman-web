import { useContext } from 'react';
import { Context } from '../../Store';
import styles from './playground.module.css';

const Toolbar = () => {
  const { state, dispatch } = useContext(Context);

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.tabs_wrapper}>
        <div className={styles.all_tabs}>
          <div className={styles.tab}>
            <span>Overview</span>
            <button type="button">&times;</button>
          </div>
          <div className={styles.tab_active}>
            <span>{state.formData.url || 'Untitled Request'}</span>
            <button type="button" onClick={() => resetForm()}>
              &times;
            </button>
          </div>
        </div>
        <div className={styles.tab_actions}>
          <div className={styles.tab_sm}>
            <i className="feather-plus"></i>
          </div>
          <div className={styles.tab_sm}>
            <i className="feather-more-horizontal"></i>
          </div>
        </div>
      </div>
      <div className={styles.env_menu}>
        <select name="" id="">
          <option value="">No Environment</option>
        </select>
        <button type="button">
          <i className="feather-eye"></i>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
