import { useContext, useState } from 'react';
import LineLoader from './LineLoader';
import HeadersTable from './HeadersTable';
import { Context } from '../../../Store';
import ResponseBody from './ResponseBody';
import style from './response.module.css';

const ResponseWrapper = () => {
  const { state, dispatch } = useContext(Context);
  const [respView, setRespView] = useState('body');
  const [viewAs, setViewAs] = useState('pretty');
  const [viewMode, setViewMode] = useState('json');
  const [wordWrap, setWordWrap] = useState(false);

  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  function getResponseSize(response) {
    return niceBytes(
      JSON.stringify(response.data).length +
        JSON.stringify(response.headers).length
    );
  }

  function niceBytes(x) {
    let l = 0,
      n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
  }

  const cancelRequest = () => {
    dispatch({ type: 'CANCEL_FORM_SUBMIT' });
  };

  return (
    <>
      {state.formSubmitted && (
        <>
          <LineLoader />
          <div className={style.overlay}>
            <div>
              <p>Sending request...</p>
              <button type="button" onClick={cancelRequest}>
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
      {state.apiResponse && (
        <div
          className={
            state.splitView === 'V' ? style.wrapper_full : style.wrapper
          }
        >
          <div className={style.top}>
            <div className={style.header}>
              <ul className={style.payload_types}>
                <li
                  onClick={(e) => setRespView('body')}
                  className={
                    respView === 'body'
                      ? style.payload_tab_active
                      : style.payload_tab
                  }
                >
                  Body
                </li>
                <li
                  onClick={(e) => setRespView('headers')}
                  className={
                    respView === 'headers'
                      ? style.payload_tab_active
                      : style.payload_tab
                  }
                >
                  Headers{' '}
                  {state.apiResponse && (
                    <span>
                      ({Object.entries(state.apiResponse.headers).length})
                    </span>
                  )}
                </li>

                <li className={style.payload_tab_disabled}>Cookies</li>
                <li className={style.payload_tab_disabled}>Test results</li>
              </ul>
              <div className={style.resp_meta}>
                <i className="feather-globe"></i>
                <div>
                  Status: <span>{state.apiResponse.status}</span>
                </div>
                <div>
                  Time: <span>{state.apiResponse.customData.time}ms</span>
                </div>
                <div>
                  Size: <span>{getResponseSize(state.apiResponse)}</span>
                </div>
              </div>
              <div className={style.saveBtn}>
                <button>Save Response</button>
              </div>
            </div>
            {respView === 'body' && (
              <div className={style.more}>
                <div className={style.tabs}>
                  <div className={style.tab_group}>
                    <div
                      onClick={() => setViewAs('pretty')}
                      className={viewAs === 'pretty' ? style.tab_selected : ''}
                    >
                      Pretty
                    </div>
                    <div
                      onClick={() => setViewAs('raw')}
                      className={viewAs === 'raw' ? style.tab_selected : ''}
                    >
                      Raw
                    </div>
                    <div
                      onClick={() => setViewAs('preview')}
                      className={viewAs === 'preview' ? style.tab_selected : ''}
                    >
                      Preview
                    </div>
                    <div
                      onClick={() => setViewAs('visual')}
                      className={viewAs === 'visual' ? style.tab_selected : ''}
                    >
                      Visualize
                    </div>
                  </div>
                  {viewAs === 'pretty' && (
                    <>
                      <div className={style.tab_group}>
                        <select
                          value={viewMode}
                          onChange={(event) => setViewMode(event.target.value)}
                        >
                          <option value="json">JSON</option>
                          <option value="xml" disabled>
                            XML
                          </option>
                          <option value="html" disabled>
                            HTML
                          </option>
                          <option value="text" disabled>
                            Text
                          </option>
                          <option value="auto" disabled>
                            Auto
                          </option>
                        </select>
                      </div>
                      <div className={style.tab_group}>
                        <button
                          className={wordWrap ? style.button_selected : ''}
                          onClick={() => setWordWrap(!wordWrap)}
                        >
                          <i className="feather-corner-down-left"></i>
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className={style.resp_action}>
                  <button>
                    <i className="feather-copy"></i>
                  </button>
                  <button disabled>
                    <i className="feather-search"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className={style.scroll}>
            {(() => {
              switch (respView) {
                case 'body':
                  return (
                    <ResponseBody
                      data={state.apiResponse.data}
                      wrap={wordWrap}
                      viewAs={viewAs}
                      viewMode={viewMode}
                    />
                  );
                case 'headers':
                  return (
                    <HeadersTable
                      headers={Object.entries(state.apiResponse.headers)}
                    />
                  );
                default:
                  return;
              }
            })()}
          </div>
        </div>
      )}
    </>
  );
};

export default ResponseWrapper;
