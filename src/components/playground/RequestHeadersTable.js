import { useContext, useState } from 'react';
import { Context } from '../../Store';
import styles from './playground.module.css';

const RequestHeadersTable = ({ onHeadersChange }) => {
  const { state } = useContext(Context);
  const [inputList, setInputList] = useState([
    { keyName: '', value: '', selected: true },
  ]);

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
      .filter((qp) => qp.selected)
      .map((e) => `${e.keyName}=${e.value}`)
      .join('&');
    onHeadersChange(headers);
  };

  return (
    <div
      className={
        state.responsePanelMinimized || state.splitView === 'V'
          ? styles.payload_wrapper_full
          : styles.payload_wrapper
      }
    >
      <table
        className={
          state.splitView === 'H' ? styles.qp_table : styles.qp_table_small
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
          {inputList.map((x, i) => (
            <>
              <tr key={`qp-input-row-${i}`}>
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
                <tr key="new-input-x">
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
