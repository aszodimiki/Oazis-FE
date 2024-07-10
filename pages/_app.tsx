import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';
import Layout from '@/components/layout/Layout';
import { FooterTexts } from '@/components/layout/TextModels';
import { getFooterTexts } from '@/helpers/api-utils';
import '@/styles/globals.css';
import type { AppProps } from 'next/app'
import { Nunito  } from '@next/font/google';
import Head from "next/head";

interface Datas {
  footerTexts: FooterTexts;
}  

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps, {footerTexts}:{footerTexts: FooterTexts}){
  
    return (
      <>
        <Head>
          <title>Oazis Vendéglő és Pizzéria</title>
          <meta
            name="description"
            content="Oazis Vendéglő és Pizzéria, ahol a finom ételek és a kellemes környezet találkozik."
          />
          <meta property="og:title" content="Oázis Vendéglő és Pizzéria" />
          <meta property="og:description" content="Magyaros ízek, hamburgerek, sültek, pizzák, gyros" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://oazisvendeglo.hu" />
        </Head>
        <main className={nunito.className}>
            <Layout>
              <ErrorBoundary>
                <Component footerTexts={footerTexts} {...pageProps} />
              </ErrorBoundary>
            </Layout>
        </main>
      </>
      )
  }

  export async function getStaticProps() {
    const data = await getFooterTexts();
  
  return {
      props: {footerTexts: data},
      revalidate: 1,
    };
}