import { useState } from 'react';
import styles from './playground.module.css';

const URLBox = () => {
  const [url, setURL] = useState('');
  const [formSubmitted, setFormSubmitted] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = (e) => {
    setBtnDisabled(e.length <= 0);
    setURL(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
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
        <input
          type="url"
          value={url}
          placeholder="http://example.com"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit" disabled={btnDisabled || formSubmitted}>
          {formSubmitted ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default URLBox;
