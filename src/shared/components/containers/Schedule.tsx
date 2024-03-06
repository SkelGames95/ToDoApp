import classes from './style/Schedule.module.scss'
import { ListTitle } from '../sharedComponents/ListTitle';
import { TodoList } from './TodoList';

export const Schedule = () => {
  return (
    <div className={classes.schedules}>
      <div>
        <ListTitle />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};