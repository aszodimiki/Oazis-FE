import { GridBlock } from "@/components/Models/Grid/GridBlock";
import Weekly_Menu from "@/components/weekly-menu/Weekly_Menu";
import {  WeeklyMenu } from "@/components/weekly-menu/WeekylMenu";
import { getWeeklyMenu, getWeeklyTexts } from "@/helpers/api-utils";

interface WeeklyItems {
    weeklyMenu: WeeklyMenu;
    weeklyMenuTexts: GridBlock[]
}  

function Weekly({weeklyMenu, weeklyMenuTexts}: WeeklyItems){
    return(
        <div>
             <Weekly_Menu key={weeklyMenu.weeklyGroups.length} weeklyMenu={weeklyMenu} gridBlocks={weeklyMenuTexts}/>
        </div>

    )
}

export async function getServerSideProps() {
    const weeklyMenu = await getWeeklyMenu();
    const weeklyMenuTexts = await getWeeklyTexts();
    
    return {
        props: {
            weeklyMenu,
            weeklyMenuTexts
        },
      }
}

export default Weekly;