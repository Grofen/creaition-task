import Head from 'next/head';

import { TITLE } from '@/constants';

const MainHead = (): JSX.Element => {
  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={TITLE} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MainHead;
