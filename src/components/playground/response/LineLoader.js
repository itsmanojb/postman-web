import style from './response.module.css';

const LineLoader = () => {
  return (
    <div className={style.loader}>
      <div className={style.loaderBar}></div>
    </div>
  );
};

export default LineLoader;
