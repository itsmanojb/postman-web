import { useContext } from 'react';
import styles from './tab.module.css';
import image from '../../images/no-history.png';
import { HistoryContext } from '../../contexts/History';

function doDatewiseGroup(dataArr) {
  const dates = [];
  dataArr.filter(Boolean).forEach((el) => {
    const d = new Date(+el.split(' : ')[0]);
    dates.push(`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`);
  });
  const groupedDates = dates.filter((v, i, a) => a.indexOf(v) === i);
  const reqArr = [];
  groupedDates.forEach((el) => {
    const requests = dataArr.filter(Boolean).filter((item) => {
      const d = new Date(+item.split(' : ')[0]);
      const reqDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
      return reqDate === el;
    });
    reqArr.push({
      date: new Date(el).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      requests,
    });
  });
  return reqArr;
}

const UrlList = ({ items }) => {
  const listItems = doDatewiseGroup(items);

  return (
    <div className={styles.history_list}>
      {listItems.map((group, i) => (
        <div className={styles.history_group} key={`req-history-group-${i}`}>
          <details open>
            <summary>{group.date}</summary>
            <div>
              <ul>
                {group.requests.map((req, j) => {
                  const item = req.split(' : ')[1];
                  return (
                    <li
                      key={`req-history-item-${i}-${j}`}
                      title={item.split(' ')[1]}
                    >
                      <span className={item.split(' ')[0]}>
                        {item.split(' ')[0] === 'DELETE'
                          ? 'DEL'
                          : item.split(' ')[0]}
                      </span>
                      <span>{item.split(' ')[1]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
};

const TabHistory = () => {
  const { apis } = useContext(HistoryContext);

  return apis.length === 0 ? (
    <div className={styles.empty_tab}>
      <img src={image} alt="" />
      <h4>You haven't sent any requests.</h4>
      <p>Any request you send in this workspace will appear here.</p>
      <span>Show me how</span>
    </div>
  ) : (
    <UrlList items={apis} />
  );
};

export default TabHistory;
