import { GridBlock } from "@/components/Models/Grid/GridBlock";
import Weekly_Menu from "@/components/weekly-menu/Weekly_Menu";
import {  WeeklyMenu } from "@/components/weekly-menu/WeekylMenu";
import { getWeeklyMenu, getWeeklyTexts } from "@/helpers/api-utils";
import Head from "next/head";

interface WeeklyItems {
    weeklyMenu: WeeklyMenu;
    weeklyMenuTexts: GridBlock[]
}  

function Weekly({weeklyMenu, weeklyMenuTexts}: WeeklyItems){
    return(
        <>
            <Head>
                <title>Heti menü, ami változatos</title>
                <meta
                    name="description"
                    content="Oazis Vendéglő és Pizzéria, ahol a finom ételek és a kellemes környezet találkozik."
                />
                 <meta name="keywords" content="oázis vendéglő, oázis büfé, étterem, étlap, itallap, galéria, információk, pizza, rántott hús, sertés, szárnyas, hamburger, gyros, desszertek, főételek" />
                <meta property="og:title" content="Oázis Vendéglő és Pizzéria" />
                <meta property="og:description" content="Magyaros ízek, hamburgerek, sültek, pizzák, gyros" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content='https://oazisvendeglo.hu/menu' />
            </Head>
            <Weekly_Menu key={weeklyMenu.weeklyGroups.length} weeklyMenu={weeklyMenu} gridBlocks={weeklyMenuTexts}/>
        </>

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