import style from './response.module.css';

const HeadersTable = ({ headers = [] }) => {
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
        {headers.map(([key, value], i) => (
          <tr key={`rsp-h-${i}`}>
            <td></td>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HeadersTable;
