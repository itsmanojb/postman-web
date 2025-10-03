import { useContext } from 'react';
import { Context } from '../../contexts/Store';
import styles from './layout.module.css';

const Footer = () => {
  const { state, dispatch } = useContext(Context);

  const toggleSplitView = () => {
    dispatch({
      type: 'SET_SPLIT_VIEW',
      payload: state.splitView === 'H' ? 'V' : 'H',
    });
  };

  const toggleSidebar = () => {
    dispatch({ type: 'SET_SIDEDRAWER', payload: !state.sideDrawerOpened });
  };

  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_menu__left}>
        <li onClick={toggleSidebar}>
          <i className="feather-sidebar"></i>
        </li>
        <li>
          <i className="feather-search"></i> Find and Replace
        </li>
        <li>
          <i className="feather-terminal"></i> Console
        </li>
      </ul>
      <ul className={styles.footer_menu__right}>
        <li>
          <i className="feather-airplay"></i> Runner
        </li>
        <li>
          <i className="feather-trash-2"></i> Trash
        </li>
        <li onClick={toggleSplitView}>
          <i
            className={
              state.splitView === 'H'
                ? 'feather-credit-card'
                : 'feather-sidebar'
            }
          ></i>
        </li>
        <li style={{ paddingInline: '4px' }}>
          <i className="feather-help-circle" style={{ marginRight: 0 }}></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
