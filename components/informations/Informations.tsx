import classes from './Informations.module.css';
import dynamic from "next/dynamic";
import { decode } from 'entities';
import type { Informations } from './InformationModels';
import React, { useEffect, useState } from 'react';
import Loader from '../ui/Loader';
import parse from 'html-react-parser';
import decodeHtml from '@/helpers/HtmlDecoder';

const Map = dynamic(() => import("@/components/map/Map"),{
    ssr:false
});

function Informations({informations}:{informations: Informations}) {
    //space: &nbsp;
    
    return (
        
        <div className={classes.container}>
            <div className={classes.basic_container}>
                <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(informations.address) }} />
                <Map />
            </div>

            <div className={classes.basic_container}>
                    <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(informations.delivery) }} />
                <div className={classes.basic_container}>
                    <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(informations.reservation) }} />
                </div>
            </div>
        </div>
    );
}

export default Informations;