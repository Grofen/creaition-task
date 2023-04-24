import MainHead from '@components/shared/main-head';
import { SiteContextProvider } from '@lib/context';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';

import '@styles/globals.scss';

import Landing from '@/components/landing';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SiteContextProvider>
      <LazyMotion features={domAnimation}>
        <MainHead />
        <Landing />
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </LazyMotion>
    </SiteContextProvider>
  );
}
