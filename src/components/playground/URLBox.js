import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import axios from 'axios';
import { Context } from '../../Store';
import styles from './playground.module.css';

axios.interceptors.request.use((request) => {
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

const URLBox = ({ onSubmit }) => {
  const { state, dispatch } = useContext(Context);

  const [url, setUrl] = useState(state.formData.url);
  const [queryParams, setQueryParams] = useState(state.formData.params);
  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    let qp = state.formData.params;
    if (state.authLocation === 'qp') {
      const header = state.authHeader.split(':');
      if (header.length === 2) {
        qp = qp
          ? `${qp}&${header[0]}=${header[1]}`
          : `${header[0]}=${header[1]}`;
      }
    } else {
      qp = state.formData.params;
    }
    setQueryParams(qp);

    let headerObject = {},
      authHeader = {};
    if (state.requestHeaders.length) {
      headerObject = {};
      state.requestHeaders.forEach((header) => {
        const { key, value } = header;
        headerObject[key] = value;
      });
    }

    if (state.auth) {
      authHeader = {};
      const auth = state.authHeader.split(':');
      if (state.authLocation === 'header') {
        authHeader[auth[0]] = auth[1];
      } else {
        delete authHeader[auth[0]];
      }
    }
    setHeaders({ ...headerObject, ...authHeader });
  }, [state]);

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

    const fullUrl = queryParams ? `${url}${queryParams}` : url;
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
      headers,
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
            qp={queryParams}
          />
          <span>{queryParams}</span>
        </div>
        <button type="submit" disabled={btnDisabled || state.formSubmitted}>
          {state.formSubmitted ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default URLBox;
