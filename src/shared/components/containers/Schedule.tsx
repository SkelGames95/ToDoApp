import blackbin from '../../../assets/blackbin.svg'
import archive from '../../../assets/archive.svg'
import classes from './style/Schedule.module.scss'

export const Schedule = () => {
  return (
    <div className={classes.schedules}>
        <h2>List Title</h2>
        <img src={blackbin} alt="black bin icon" className={classes.tinyicons} />
        <img src={archive} alt="archive icon" className={classes.tinyicons} />
        {/* todolist */}
    </div>
  );
};