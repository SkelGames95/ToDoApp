import { TodoItem } from '../sharedComponents/TodoItem';
import classes from './style/TodoList.module.scss'

export const TodoList = () => {
  return (
    <div className={classes.listCont}>
      < TodoItem />
    </div>
  );
}
