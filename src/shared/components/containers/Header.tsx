import classes from './style/Header.module.scss'

export const Header = () => {
  return (
    <div className={classes.headerText}>
        <h1 className={classes.titles}>To.DoIT APP</h1>
        <h3 className={`${classes.titles} ${classes.subtitle}`}>ToDos</h3>
    </div>
  );
}
