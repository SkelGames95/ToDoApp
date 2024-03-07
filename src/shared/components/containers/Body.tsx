import { Schedule } from "./Schedule";
import classes from "./style/Body.module.scss";

export const Body = () => {
  return (
    <div className={classes.bodyCont}>
      <div className={classes.scheduleCont}>
        <Schedule />
        {/* <AddSchedule /> */}
      </div>
      <div>
        <button
          className={`${classes.completeButton} ${classes.tasksButton}`}
        >
          Complete
        </button>
        <button className={`${classes.deleteButton} ${classes.tasksButton}`}>
          Delete
        </button>
        <button
          className={`${classes.prioritizeButton} ${classes.tasksButton}`}
        >
          Prioritize!
        </button>
        <button className={`${classes.snoozeButton} ${classes.tasksButton}`}>
          Snooze
        </button>
      </div>
      <form name="addTask">
        <input type="text" className={classes.toDoInput} />
        <button className={classes.addButton}>ADD</button>
      </form>
    </div>
  );
};
