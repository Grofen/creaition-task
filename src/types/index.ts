import { Dispatch, SetStateAction } from 'react';

export type InitialContextType = {
  title: string;
};

export type SiteContextType = {
  context: InitialContextType;
  setContext: Dispatch<SetStateAction<InitialContextType>>;
};

export enum ButtonVariant {
  Dark = 'dark',
  Light = 'light',
}
