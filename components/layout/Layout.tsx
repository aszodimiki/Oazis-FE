import ENDPOINTS from '@/utilities/Constants';
import Footer from './Footer';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import { FooterTexts } from './TextModels';
import { useEffect, useRef, useState } from 'react';

type LayoutProps = {
    children: React.ReactNode
  };

export default function Layout({children} : LayoutProps){
const mainRef = useRef<HTMLDivElement | null>(null);
    return (
        <div ref={mainRef} className={`${classes.base}`}>
            <div className={classes.background}></div>
            <MainNavigation target={mainRef}/>
            <main className={classes.container}>{children}</main>
        </div>
    );
}
