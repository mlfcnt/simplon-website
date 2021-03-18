import React, { createContext, useState } from "react";

export const SectionContext = createContext();

export default function SectionProvider({ children }) {
  const [selectedSection, setSelectedSession] = useState(null);

  return (
    <SectionContext.Provider value={[selectedSection, setSelectedSession]}>
      {children}
    </SectionContext.Provider>
  );
}
