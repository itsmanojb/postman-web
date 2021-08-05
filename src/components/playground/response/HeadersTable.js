import { useState } from 'react';
import style from './response.module.css';

const HeadersTable = () => {
  const [headers, setHeaders] = useState([]);
  return (
    <table className={style.headers_table}>
      <thead>
        <tr>
          <th></th>
          <th>KEY</th>
          <th>VALUE</th>
        </tr>
      </thead>
      <tbody>
        {headers.map((header, i) => (
          <tr key={`rsp-h-${i}`}>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HeadersTable;
