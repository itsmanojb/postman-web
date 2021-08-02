import { useState } from 'react';
import styles from './playground.module.css';

const QueryRow = ({ onKVchange }) => {
  const [selected, setSelected] = useState(true);
  const [keyName, setKey] = useState('');
  const [value, setValue] = useState('');

  const onDelete = () => {
    setKey('');
    setValue('');
    if (selected) {
      onKVchange({ key: '', value: '' });
    }
  };

  const onChangeInput = (f, e) => {
    if (f === 'k') {
      setKey(e);
    } else if (f === 'v') {
      setValue(e);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (selected) {
        onKVchange({ key: keyName, value });
      }
    }
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => setSelected(!selected)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Key"
          value={keyName}
          onChange={(e) => onChangeInput('k', e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => onChangeInput('v', e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </td>
      <td>
        <input type="text" placeholder="Description" />
        <span onClick={onDelete}>&times;</span>
      </td>
    </tr>
  );
};

const QueryParamsTable = ({ viewMode, splitMode }) => {
  const [qp, setQP] = useState('');

  const setQueryParams = ({ key, value }) => {
    const qpString = value ? `${key}=${value}` : `${key}`;
    setQP(qpString);
  };

  return (
    <div
      className={
        viewMode === 'full' || splitMode === 'V'
          ? styles.payload_wrapper_full
          : styles.payload_wrapper
      }
    >
      <table
        className={splitMode === 'H' ? styles.qp_table : styles.qp_table_small}
      >
        <caption>Query Params</caption>
        <thead>
          <tr>
            <th></th>
            <th>KEY</th>
            <th>VALUE</th>
            <th>
              <span>DESCRIPTION</span>
              <span className={styles.qp_options}>
                <span>
                  <i className="feather-more-horizontal"></i>
                </span>
                <span>Bulk Edit</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <QueryRow onKVchange={(e) => setQueryParams(e)} />
        </tbody>
      </table>
    </div>
  );
};

export default QueryParamsTable;
