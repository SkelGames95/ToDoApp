import classes from './TasksButtons.module.scss'

export const TasksButtons = () => {
  return (
    <>
      <button className={classes.completeButton}>Complete</button>
      <button className={classes.deleteButton}>Delete</button>
      <button className={classes.prioritizeButton}>Prioritize!</button>
      <button className={classes.snoozeButton}>Snooze</button>
    </>
  );
};
