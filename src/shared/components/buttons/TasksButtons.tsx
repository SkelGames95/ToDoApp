import classes from './TasksButtons.module.scss'

export const TasksButtons = () => {
  return (
    <>
      <button className={`${classes.completeButton} ${classes.genericButton}`}>Complete</button>
      <button className={`${classes.deleteButton} ${classes.genericButton}`}>Delete</button>
      <button className={`${classes.prioritizeButton} ${classes.genericButton}`}>Prioritize!</button>
      <button className={`${classes.snoozeButton} ${classes.genericButton}`}>Snooze</button>
    </>
  );
};
