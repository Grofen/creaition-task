import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cre[ai]tion</title>
        <meta name="description" content="Cre[ai]tion" />
        <link rel="icon" href="/cre_ai_tion_logo_black.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
