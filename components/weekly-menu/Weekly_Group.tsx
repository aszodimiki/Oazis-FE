import Weekly_Card from "./Weekly_Card";
import classes from './/Weekly_Group.module.css';
import { DailyMenu } from "./WeekylMenu";


function WeeklyGroup({dailyMenus}:{dailyMenus: DailyMenu[]}){
    return(
        <>
            <div className={classes.weekyl_date}> ASd</div>
            <div className={classes.container}>
                {dailyMenus.map((item) => <Weekly_Card key={item.day.toString()} dailyItem={item}/>) }
            </div>
        </>
    );
}

export default WeeklyGroup;
