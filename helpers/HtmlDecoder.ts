import { decode } from 'entities';

export function decodeHtml(htmlCode: string){
    var modifiedHtmlCode = prepareHtmlContent(htmlCode);
    var decodedHtml = decode(modifiedHtmlCode);
    return decodedHtml.replace(/ /g, ' ');
}

export const prepareHtmlContent = (htmlContent: string): string => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    return htmlContent.replace(/<img src="([^"]+)"/g, (match, src) => {
        if (!src.startsWith('http')) {
            return `<img src="${baseUrl}${src}"`;
        }
        return match;
    });
};
