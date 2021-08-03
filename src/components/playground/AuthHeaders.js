import styles from './playground.module.css';

const AuthHeaders = ({ viewMode, splitMode }) => {
  return (
    <div
      className={
        viewMode === 'full' || splitMode === 'V'
          ? styles.payload_wrapper_full
          : styles.payload_wrapper
      }
    ></div>
  );
};

export default AuthHeaders;
