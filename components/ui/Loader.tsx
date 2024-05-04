
import classes from './Loader.module.css';

const Loader = () => {
    return (
      <div className={classes.loader}>
        <div className={classes.loader_circle}></div>
      </div>

    // <div className={classes.loader}>
    //   <div className={classes.ringContainer}>
    //     <div className={classes.ring}></div>
    //     <div className={classes.ring}></div>
    //     <div className={classes.ring}></div>
    //   </div>
    // </div>
    );
  };
  
  export default Loader;