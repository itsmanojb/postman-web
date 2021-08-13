import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import axios from 'axios';
import { Context } from '../../Store';
// import { useLocalStorage } from '../hooks/useLocalStorage';
import styles from './playground.module.css';

axios.interceptors.request.use((request) => {
  console.log('====================================');
  console.log(request);
  console.log('====================================');
  request.customData = request.customData || {};
  request.customData.startTime = new Date().getTime();
  return request;
});

function updateEndTime(response) {
  response.customData = response.customData || {};
  response.customData.time =
    new Date().getTime() - response.config.customData.startTime;
  return response;
}

axios.interceptors.response.use(updateEndTime, (e) => {
  return Promise.reject(updateEndTime(e.response));
});

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
        ref={inputRef}
        placeholder="http://example.com"
        value={props.value}
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

const URLBox = ({ headers, onSubmit }) => {
  const { state, dispatch } = useContext(Context);
  // const [requestUrls] = useLocalStorage('_post_man_history', []);

  const [url, setUrl] = useState(state.formData.url);
  const [method, setMethod] = useState(state.formData.method);
  const [btnDisabled, setBtnDisabled] = useState(
    state.formData.url.length === 0
  );

  const inputboxRef = useRef();

  const handleChange = (e) => {
    setBtnDisabled(e.length <= 0);
    if (method === '') setMethod('GET');
    dispatch({ type: 'SET_URL', payload: e });
    setUrl(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!method || !url) return;

    const fullUrl = state.formData.params
      ? `${url}?${state.formData.params}`
      : url;
    if (!state.responseUI) {
      dispatch({ type: 'SET_RESPONSE_UI', payload: true });
    }
    dispatch({
      type: 'SET_FORM_SUBMIT',
      payload: {
        method,
        url,
        params: state.formData.params,
        payload: state.formData.payload,
      },
    });
    axios({
      method,
      url: fullUrl,
      data: JSON.parse(state.formData.payload),
    })
      .catch((e) => e)
      .then((res) => {
        dispatch({
          type: 'SET_API_RESPONSE',
          payload: res,
        });
        const reqUrl = `${new Date().getTime()} : ${method} ${fullUrl}`;
        // console.log(state);
        onSubmit(reqUrl);
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
            value={url}
            ref={inputboxRef}
            onChange={handleChange}
          />
          <span>
            {state.formData.params ? `?${state.formData.params}` : ''}{' '}
          </span>
        </div>
        <button type="submit" disabled={btnDisabled || state.formSubmitted}>
          {state.formSubmitted ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default URLBox;
