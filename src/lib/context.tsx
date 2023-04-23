import { createContext, ReactNode, useState } from 'react';

import { TITLE } from '@/constants';
import { InitialContextType, SiteContextType } from '@/types';

interface Props {
  children: ReactNode;
}

const initialContext: InitialContextType = {
  title: TITLE,
};

const SiteContext = createContext<SiteContextType>({
  context: initialContext,
  setContext: () => null,
});

const SiteContextProvider = ({ children }: Props) => {
  const [context, setContext] = useState<InitialContextType>(initialContext);

  return (
    <SiteContext.Provider value={{ context, setContext }}>
      {children}
    </SiteContext.Provider>
  );
};

export { SiteContext, SiteContextProvider };
