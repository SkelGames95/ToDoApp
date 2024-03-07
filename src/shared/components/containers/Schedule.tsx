import classes from './style/Schedule.module.scss'
import blackbin from "../../../assets/blackbin.svg";
import archive from "../../../assets/archive.svg";
import { TodoItem } from '../TodoItem';

export const Schedule = () => {
  return (
    <div className={classes.schedules}>
      <div className={classes.titleCont}>
      <h2 className={classes.listTitle}>List Title</h2>
      <img src={blackbin} alt="black bin icon" className={classes.tinyicons} />
      <img src={archive} alt="archive icon" className={classes.tinyicons} />
      </div>
      <div className={classes.listCont}>
      < TodoItem />
      </div>
    </div>
  );
};