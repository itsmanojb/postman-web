import { useContext, useState } from 'react';
import { Context } from '../../Store';
import styles from './playground.module.css';

function AutoGrowInput({ value, onChange }) {
  return (
    <div
      className="auto-grow-input"
      style={{
        display: 'inline-grid',
        alignItems: 'center',
        justifyItems: 'start',
        maxWidth: '500px',
      }}
    >
      <input
        value={value}
        placeholder="http://example.com"
        onChange={(event) => onChange(event.target.value)}
        style={{
          gridArea: '1 / 1 / 2 / 2',
          width: '100%',
          padding: 0,
          border: 'none',
          maxWidth: '600px',
        }}
      />
      <span
        style={{
          gridArea: '1 / 1 / 2 / 2',
          visibility: 'hidden',
        }}
      >
        {value}
      </span>
    </div>
  );
}

const URLBox = ({ headers, params }) => {
  const [state, dispatch] = useContext(Context);

  const [value, setValue] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = (e) => {
    setBtnDisabled(e.length <= 0);
    setValue(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.responseUI) {
      dispatch({ type: 'SHOW_RESPONSE_UI' });
    }
    dispatch({ type: 'SET_FORM_SUBMIT', payload: true });
    const apiURL = params ? `${value}?${params}` : value;
    console.log(apiURL, headers);
  };

  return (
    <div className={styles.url_box}>
      <form onSubmit={handleSubmit}>
        <select>
          <option value="">Select</option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <div>
          <AutoGrowInput value={value} onChange={handleChange} />
          <span>{params ? `?${params}` : ''} </span>
        </div>
        <button type="submit" disabled={btnDisabled || state.formSubmitted}>
          {state.formSubmitted ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default URLBox;
