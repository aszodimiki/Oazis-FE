import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';
import Layout from '@/components/layout/Layout';
import { FooterTexts } from '@/components/layout/TextModels';
import { getFooterTexts } from '@/helpers/api-utils';
import '@/styles/globals.css';
import type { AppProps } from 'next/app'

interface Datas {
  footerTexts: FooterTexts;
}  

export default function App({ Component, pageProps }: AppProps, {footerTexts}:{footerTexts: FooterTexts}){
  
  return <Layout>
            <ErrorBoundary>
              <Component footerTexts={footerTexts} {...pageProps} />
            </ErrorBoundary>
          </Layout>
}

export async function getStaticProps() {
  const data = await getFooterTexts();
  
  return {
      props: {footerTexts: data},
      revalidate: 1,
    };
}