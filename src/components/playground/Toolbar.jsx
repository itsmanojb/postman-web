import { useContext } from 'react';
import { Context } from '../../contexts/Store';
import styles from './playground.module.css';

const Toolbar = () => {
  const { state, dispatch } = useContext(Context);

  const resetForm = (e) => {
    e.stopPropagation();
    dispatch({ type: 'RESET_FORM' });
  };

  const toggleOverView = (show) => {
    dispatch({ type: 'SET_OVERVIEW', payload: show ? 'shown' : 'hidden' });
  };

  const closeOverView = (e) => {
    e.stopPropagation();
    dispatch({ type: 'CLOSE_OVERVIEW' });
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.tabs_wrapper}>
        <div className={styles.all_tabs}>
          {state.overviewTab !== '' && (
            <div
              onClick={() => toggleOverView(true)}
              className={
                state.overviewTab === 'shown' ? styles.tab_active : styles.tab
              }
            >
              <span>Overview</span>
              <button type="button" onClick={(e) => closeOverView(e)}>
                &times;
              </button>
            </div>
          )}
          <div
            onClick={() => toggleOverView(false)}
            className={
              state.overviewTab === 'hidden' || state.overviewTab === ''
                ? styles.tab_active
                : styles.tab
            }
          >
            <span>{state.formData.url || 'Untitled Request'}</span>
            {!state.showOverview && (
              <button type="button" onClick={(e) => resetForm(e)}>
                &times;
              </button>
            )}
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
