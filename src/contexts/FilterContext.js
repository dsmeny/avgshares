import { useState, createContext } from "react";

export const filterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterOption, setFilterOption] = useState("");

  const context = {
    filterOption,
    setFilterOption,
  };

  return (
    <filterContext.Provider value={context}>{children}</filterContext.Provider>
  );
};
