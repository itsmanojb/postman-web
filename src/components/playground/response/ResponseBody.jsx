import { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-twilight';
import style from './response.module.css';

/* function syntaxHighlight(json) {
  if (typeof json != 'string') {
    json = JSON.stringify(json, undefined, 2);
  }

  json = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    }
  );
} */

const ResponseBody = ({ data, viewAs, wrap }) => {
  const [dark, setDark] = useState(false);

  console.log();

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDark(true);
    }
  }, []);

  return (
    <div className={style.response_body}>
      {viewAs === 'preview' && (
        <>
          {typeof data === 'object' ? (
            <div className={style.res_preview}>{JSON.stringify(data)}</div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
          )}
        </>
      )}
      {viewAs === 'raw' && (
        <div className={style.res_raw}>
          <pre>
            {typeof data === 'object' ? JSON.stringify(data, null, 2) : data}
          </pre>
        </div>
      )}
      {viewAs === 'pretty' && (
        <div className="pretty_response">
          {/* <pre
            className={wrap ? 'wrap' : ''}
            dangerouslySetInnerHTML={{ __html: syntaxHighlight(data) }}
          ></pre> */}
          {typeof data === 'object' ? (
            <AceEditor
              mode="json"
              fontSize={13}
              theme={dark ? 'twilight' : 'tomorrow'}
              value={JSON.stringify(data, null, 2)}
              name="prettyJsonOutput"
              tabSize={2}
              editorProps={{
                $blockScrolling: true,
              }}
              readOnly={true}
              wrapEnabled={wrap}
              highlightActiveLine={false}
            />
          ) : (
            <AceEditor
              mode="html"
              fontSize={13}
              theme={dark ? 'twilight' : 'tomorrow'}
              value={data}
              name="prettyJsonOutput"
              tabSize={2}
              editorProps={{
                $blockScrolling: true,
              }}
              readOnly={true}
              wrapEnabled={wrap}
              highlightActiveLine={false}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ResponseBody;
