import classes from './style/Input.module.scss'

export const Input = () => {
  return (
    <>
    <form action="">
        <input type="text" className={classes.toDoInput} />
    </form>
    </>
  );
};
