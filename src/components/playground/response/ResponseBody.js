import style from './response.module.css';

function syntaxHighlight(json) {
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
}

const ResponseBody = ({ data, viewAs, wrap }) => {
  return (
    <div className={style.response_body}>
      {viewAs === 'preview' && (
        <div className={style.res_preview}>{JSON.stringify(data)}</div>
      )}
      {viewAs === 'raw' && (
        <div className={style.res_raw}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {viewAs === 'pretty' && (
        <div className="pretty_response">
          <pre
            className={wrap ? 'wrap' : ''}
            dangerouslySetInnerHTML={{ __html: syntaxHighlight(data) }}
          ></pre>
        </div>
      )}
    </div>
  );
};

export default ResponseBody;
