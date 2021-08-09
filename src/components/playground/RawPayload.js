import { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-tomorrow';
// import '/monokai';

const RawPayload = () => {
  const [input, setInput] = useState({});
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDark(true);
    }
  }, []);
  return (
    <AceEditor
      mode="json"
      fontSize={13}
      theme={dark ? 'twilight' : 'tomorrow'}
      onChange={setInput}
      name="rawPayloadInput"
      tabSize={2}
      editorProps={{
        $blockScrolling: true,
      }}
    />
  );
};

export default RawPayload;
