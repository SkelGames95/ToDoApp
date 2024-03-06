import blackbin from "../../../assets/blackbin.svg";
import archive from "../../../assets/archive.svg";
import classes from "./style/ListTitle.module.scss";

export const ListTitle = () => {
  return (
    <div className={classes.titleCont}>
      <h2>List Title</h2>
      <img src={blackbin} alt="black bin icon" className={classes.tinyicons} />
      <img src={archive} alt="archive icon" className={classes.tinyicons} />
    </div>
  );
};
