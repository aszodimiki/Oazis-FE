import {decodeHtml} from '@/helpers/HtmlDecoder';
import classes from './Footer.module.css';
import { FooterTexts } from './TextModels';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Footer(){
    const [data, setData] = useState<FooterTexts | null>(null);
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        axios.get<FooterTexts>(`${baseUrl}/api/information/footer`)
            .then(response => {
                setData(response.data);                
            })
            .catch(err => {
                setData(null);
            });
    }, []);


    return(                
        <div className={classes.footer}>
            <div className={classes.container}>
                {data?.address && <div className={classes.datas}>
                    <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(data.address) }} />
                </div>}
                {data?.openingHours && <div className={classes.datas}>
                    <div className={classes.decoded} dangerouslySetInnerHTML={{ __html: decodeHtml(data.openingHours) }} />
                </div>}
                <div className={[classes.datas, classes.icons].join(' ')}>
                    { data?.socialLinks && data.socialLinks.map((item, i) =><a href={item.socialUrl}><img key={i} className={classes.logo_size} src={baseUrl+item.imageUrl} /></a> )}
                </div>
            </div>
        </div>
    );
}

export default Footer;