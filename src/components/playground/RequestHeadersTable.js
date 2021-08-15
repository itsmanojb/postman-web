import { useContext, useState } from 'react';
import { Context } from '../../contexts/Store';
import styles from './playground.module.css';
import style from './authHeader.module.css';

const RequestHeadersTable = () => {
  const { state, dispatch } = useContext(Context);
  const [authHeader] = useState(() => {
    if (state.authLocation === 'header') {
      const header = state.authHeader.split(':');
      if (header.length === 2) {
        return { keyName: header[0], value: header[1], selected: true };
      }
    }
    return null;
  });

  const [inputList, setInputList] = useState(() => {
    if (state.requestHeaders.length) {
      return state.requestHeaders.map((header) => ({
        keyName: header.key,
        value: header.value,
        selected: true,
      }));
    } else {
      return [{ keyName: '', value: '', selected: true }];
    }
  });

  const handleInputChange = (e, index) => {
    const { name, value, checked } = e.target;
    const list = [...inputList];
    list[index][name] = name === 'selected' ? checked : value;
    setInputList(list);
    getHeaders(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(() => list);
    getHeaders(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { keyName: '', value: '', selected: true }]);
  };

  const getHeaders = (list) => {
    const headers = list
      .filter((header) => header.selected && header.keyName !== '')
      .map((header) => ({ key: header.keyName, value: header.value }));
    dispatch({ type: 'SET_REQUEST_HEADERS', payload: headers });
  };

  return (
    <div
      className={
        state.responsePanelMinimized || state.splitView === 'V'
          ? styles.payload_wrapper_full
          : styles.payload_wrapper
      }
      style={{ borderColor: 'transparent' }}
    >
      <table
        className={
          state.splitView === 'H' ? style.qp_table : style.qp_table_small
        }
      >
        <caption>Headers</caption>
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
          {authHeader && (
            <tr>
              <td>
                <input type="checkbox" name="selected" checked disabled />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Key"
                  name="keyName"
                  value={authHeader.keyName}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Value"
                  name="value"
                  value={authHeader.value}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value="Added automatically from authorization."
                  placeholder="Description"
                  disabled
                />
              </td>
            </tr>
          )}
          {inputList.map((x, i) => (
            <>
              <tr key={`reqh-input-row-${i}`}>
                <td>
                  <input
                    type="checkbox"
                    name="selected"
                    checked={x.selected}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Key"
                    name="keyName"
                    value={x.keyName}
                    onChange={(e) => handleInputChange(e, i)}
                    spellCheck={false}
                    autoComplete="off"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Value"
                    name="value"
                    value={x.value}
                    onChange={(e) => handleInputChange(e, i)}
                    spellCheck={false}
                    autoComplete="off"
                  />
                </td>
                <td>
                  <input type="text" placeholder="Description" />
                  {inputList.length !== 1 && (
                    <span onClick={() => handleRemoveClick(i)}>&times;</span>
                  )}
                </td>
              </tr>
              {inputList.length - 1 === i && (
                <tr key="reqh-new-input-x">
                  <td colSpan={4} className={styles.add_td}>
                    <button onClick={handleAddClick}>
                      <i className="feather-plus"></i>
                    </button>
                  </td>
                </tr>
              )}
            </>
            // <QueryRow key={i} onKVchange={(e) => setQueryParams(e)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestHeadersTable;
