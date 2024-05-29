import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';
import Layout from '@/components/layout/Layout';
import { FooterTexts } from '@/components/layout/TextModels';
import { getFooterTexts } from '@/helpers/api-utils';
import '@/styles/globals.css';
import type { AppProps } from 'next/app'
import { Indie_Flower } from '@next/font/google';

interface Datas {
  footerTexts: FooterTexts;
}  

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps, {footerTexts}:{footerTexts: FooterTexts}){
  
    return (
          <main className={indieFlower.className}>
            <Layout>
              <ErrorBoundary>
                <Component footerTexts={footerTexts} {...pageProps} />
              </ErrorBoundary>
            </Layout>
          </main>
          )

  }

  export async function getStaticProps() {
    const data = await getFooterTexts();
  
  return {
      props: {footerTexts: data},
      revalidate: 1,
    };
}