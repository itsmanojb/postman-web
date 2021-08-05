import { useState } from 'react';
import LineLoader from './LineLoader';
import HeadersTable from './HeadersTable';
import style from './response.module.css';

const ResponseWrapper = ({ view = 'H', reload }) => {
  let status = '200',
    time = '400ms',
    size = '2.5kb';
  const [respView, setRespView] = useState('body');

  return (
    <>
      {reload && (
        <>
          <LineLoader />
          <div className={style.overlay}></div>
        </>
      )}
      <div className={view === 'V' ? style.wrapper_full : style.wrapper}>
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
                Headers <span>(5)</span>
              </li>

              <li className={style.payload_tab_disabled}>Cookies</li>
              <li className={style.payload_tab_disabled}>Test results</li>
            </ul>
            <div className={style.resp_meta}>
              <i className="feather-globe"></i>
              <div>
                Status: <span>{status}</span>
              </div>
              <div>
                Time: <span>{time}</span>
              </div>
              <div>
                Size: <span>{size}</span>
              </div>
            </div>
            <div className={style.saveBtn}>
              <button>Save Response </button>
            </div>
          </div>
          {respView === 'body' && (
            <div className={style.more}>
              <div className={style.tabs}>
                <div className={style.tab_group}>
                  <div className={style.tab_selected}>Pretty</div>
                  <div>Raw</div>
                  <div>Preview</div>
                  <div>Visualize</div>
                </div>
                <div className={style.tab_group}>
                  <select name="" id="">
                    <option value="json">JSON</option>
                    <option value="xml">XML</option>
                    <option value="html">HTML</option>
                    <option value="text">Text</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                <div className={style.tab_group}>
                  <button>
                    <i className="feather-corner-down-left"></i>
                  </button>
                </div>
              </div>
              <div className={style.resp_action}>
                <button>
                  <i className="feather-copy"></i>
                </button>
                <button>
                  <i className="feather-search"></i>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={style.scroll}>
          {(() => {
            switch (respView) {
              case 'headers':
                return <HeadersTable />;
              default:
                break;
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default ResponseWrapper;
