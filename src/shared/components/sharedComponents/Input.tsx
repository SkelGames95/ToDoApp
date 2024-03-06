import classes from './style/Input.module.scss'

export const Input = () => {
  return (
    <>
      <input type="text" className={classes.toDoInput} />
    </>
  );
};
