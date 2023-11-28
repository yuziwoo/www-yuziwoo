import React, { createContext, useContext } from "react";

const ContentyContext = createContext();

export const ContentyProvider = ({ children, contentyInstance }) => (
  <ContentyContext.Provider value={contentyInstance}>
    {children}
  </ContentyContext.Provider>
);

export const useContenty = () => {
  const ContentyInstance = useContext(ContentyContext);
  if (!ContentyInstance) {
    throw new Error(`Contenty Error: Can't find Contenty instance.`);
  }
  return ContentyInstance;
};