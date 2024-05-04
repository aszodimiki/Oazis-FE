import ENDPOINTS from '@/utilities/Constants';
import Footer from './Footer';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import { FooterTexts } from './TextModels';
import { useEffect, useState } from 'react';

type LayoutProps = {
    children: React.ReactNode
  };

export default function Layout({children} : LayoutProps){



    return (
        <div className={classes.main}>
            <MainNavigation/>
            <main className={classes.container}>{children}</main>
            <Footer/>
        </div>
    );
}
