import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import axios from 'axios';
import { Context } from '../../Store';
import styles from './playground.module.css';

const AutoGrowInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

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
        value={props.value}
        ref={inputRef}
        placeholder="http://example.com"
        onChange={(event) => props.onChange(event.target.value)}
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
        {props.value}
      </span>
    </div>
  );
});

const URLBox = ({ headers, params }) => {
  const [state, dispatch] = useContext(Context);

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const inputboxRef = useRef();

  const handleChange = (e) => {
    setBtnDisabled(e.length <= 0);
    setUrl(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!method || !url) return;

    if (!state.responseUI) {
      dispatch({ type: 'SHOW_RESPONSE_UI' });
    }
    dispatch({ type: 'SET_FORM_SUBMIT', payload: true });
    const fullUrl = params ? `${url}?${params}` : url;
    console.log(fullUrl, headers);

    axios({ method, url: fullUrl })
      .then((res) => {
        dispatch({
          type: 'SET_API_RESPONSE',
          payload: { success: true, data: res, err: null },
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SET_API_RESPONSE',
          payload: { success: false, data: null, err },
        });
      });
  };

  return (
    <div className={styles.url_box}>
      <form onSubmit={handleSubmit}>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="">Select</option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <div
          onClick={() => {
            inputboxRef.current.focus();
          }}
        >
          <AutoGrowInput
            ref={inputboxRef}
            value={url}
            onChange={handleChange}
          />
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
