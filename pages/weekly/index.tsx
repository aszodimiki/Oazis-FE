import { GridBlock } from "@/components/Models/Grid/GridBlock";
import TextContainer from "@/components/layout/TextContainer";
import { TextContainerObj } from "@/components/layout/TextModels";
import Loader from "@/components/ui/Loader";
import Weekly_Menu from "@/components/weekly-menu/Weekly_Menu";
import { DailyMenu, WeeklyMenu } from "@/components/weekly-menu/WeekylMenu";
import { getWeeklyMenu, getWeeklyTexts } from "@/helpers/api-utils";

const test : WeeklyFood[]=
[
    {date:'Kedd 02.03', firstFood: 'Vándor test text any kind of food', secondFood: 'Gyros'},
    {date:'Szerda 02.04', firstFood: 'Vándor', secondFood: 'Gyros'},
    {date:'Csütrötök 02.04', firstFood: 'Vándor', secondFood: 'Gyros'},
    {date:'Péntek 02.05', firstFood: 'Vándor', secondFood: 'Gyros'}
]

const mockText: TextContainerObj =
{
    title: 'Heti menü ajánlatunk',
    description: 'Örömmel tájékoztatjuk kedves Vendégeinket, hogy Vendéglátó Egységünkben elérhető a heti menü! Kínálatunkat rendszeresen frissítjük és minden héten változatos étellel próbálunk szolgálni.',
    footNote: null

}

const MockWeeklyList : WeeklyObj =
{
    weeklyFoods : test,
    weeklyText :'1800/adag, rendelés a 06301236547 telefonszámon.'
}

interface WeeklyItems {
    weeklyMenu: WeeklyMenu;
    weeklyMenuTexts: GridBlock[]
}  

function Weekly({weeklyMenu, weeklyMenuTexts}: WeeklyItems){
    return(
        <div>
             <Weekly_Menu key={1} weeklyMenu={weeklyMenu} gridBlocks={weeklyMenuTexts}/>
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