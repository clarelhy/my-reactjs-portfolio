/**
 * ApplicationContext.ts
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file Application Context to get app related info
 */

import React from "react";

const Context = React.createContext({
  isMobile: false,
  isDesktop: false,
  isTablet: false,
});

export const Provider = Context.Provider;

export function useApplicationContext() {
  return React.useContext(Context);
}
