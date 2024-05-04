import { decode } from 'entities';

export default function decodeHtml(htmlCode: string){
    var decodedHtml = decode(htmlCode);
    return decodedHtml.replace(/ /g, ' ');
}