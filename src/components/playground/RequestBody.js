import styles from './playground.module.css';

const RequestBody = ({ viewMode, splitMode }) => {
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

export default RequestBody;
