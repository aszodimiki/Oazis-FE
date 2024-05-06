import { GridBlock } from "@/components/Models/Grid/GridBlock";
import { CarouselModel } from "@/components/carousel/CarouselModel";
import { GaleryPicture } from "@/components/galeria/PictureModel";
import { Informations } from "@/components/informations/InformationModels";
import { FooterTexts } from "@/components/layout/TextModels";
import { DailyMenu, WeeklyMenu } from "@/components/weekly-menu/WeekylMenu";

const localUrl = process.env.API_LOCAL_URL;

export async function getProductTypes(){
    try {
        const res = await fetch(`${localUrl}/api/products/product-types`);
        
       const data: ProductType[] = await res.json();
       
        return data;
    } catch (error) {
        return null;
    }
}

export async function getInformations(){
    try {
        const res = await fetch(`${localUrl}/api/information`);
        
       const data: Informations = await res.json();
        return data;
    } catch (error) {
        return null; 
    }
}

export async function getFooterTexts(){
    try {
        const res = await fetch(`${localUrl}/api/information/footer`);
        
        const data: FooterTexts = await res.json();
        return data;
    } catch (error) {
        return null; 
    }
}

export async function getProductsByType(productType: string |string[] | undefined){
    try {
        const res = await fetch(`${localUrl}/api/products/product-types/${productType}`);
    
        const data: Product[] = await res.json();        
        return data;
    } catch (error) {
        return null;
    }
}

export async function getWeeklyMenu(){
    try {
        const res = await fetch(`${localUrl}/api/products/weekly`);
        
        const data: WeeklyMenu = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function getCarousels(){
    try {
        const res = await fetch(`${localUrl}/api/texts/carousels`);
    
        const data: CarouselModel[] = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function getGaleryPictures(){
    try {
        const res = await fetch(`${localUrl}/api/galery/images`);
    
        const data: GaleryPicture[] = await res.json();        
        return data;
    } catch (error) {
        return null;
    }
}

export async function getHomeTexts(){
    try {
        const res = await fetch(`${localUrl}/api/texts/home`);
    
        const data: GridBlock[] = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function getWeeklyTexts(){
    try {
        const res = await fetch(`${localUrl}/api/texts/weekly`);
    
        const data: GridBlock[] = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}