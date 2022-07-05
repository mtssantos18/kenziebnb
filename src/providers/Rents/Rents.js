import { createContext, useState } from "react";

export const RentsContext = createContext([]);

export const RentsProvider = ({ children }) => {
  const [rents, setRents] = useState([]);

  function bookHouse(id) {}

  return (
    <RentsContext.Provider value={{ rents, bookHouse }}>
      {children}
    </RentsContext.Provider>
  );
};
