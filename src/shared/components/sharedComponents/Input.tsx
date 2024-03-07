import classes from './style/Input.module.scss'


export const Input = () => {
  return (
    <>
    <form action="">
        <input type="text" className={classes.toDoInput} />
        <button className={classes.addButton}>ADD</button>
    </form>
    </>
  );
};
