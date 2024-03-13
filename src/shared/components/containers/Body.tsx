import { useState } from "react";
import { Schedule } from "./Schedule";
import { createTodo } from "../../../models/todo";
import classes from "./style/Body.module.scss";



export const Body = () => {
  const [writeTask, setWriteTask] = useState("");
  const [sendTask, setSendTask] = useState("");
  
  const handleWriteTask = (event:React.ChangeEvent<HTMLInputElement>) => {
    setWriteTask(event.target.value);
  }

  const handleAddTask = () => {

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
        <input type="text" value={writeTask} onChange={handleWriteTask} className={classes.toDoInput} />
        <button  className={classes.addButton} onClick={handleAddTask} >ADD</button>
      </form>
      
    </div>
  );
};
