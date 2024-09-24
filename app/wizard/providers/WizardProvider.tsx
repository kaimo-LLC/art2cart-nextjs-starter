import React, { createContext, ReactNode, useContext } from "react";
import { WizardStore, useWizardStore } from "./useWizardStore";

const WizardContext = createContext<WizardStore>({} as WizardStore);

export const WizardProvider = ({ children }: { children: ReactNode }) => {
  const store = useWizardStore();
  return (
    <WizardContext.Provider value={store}>{children}</WizardContext.Provider>
  );
};

export const useWizardContext = () => useContext(WizardContext);
