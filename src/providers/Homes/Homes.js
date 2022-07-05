import { createContext, useState } from "react";

export const HomesContext = createContext([]);

export const HomesProvider = ({ children }) => {
  const [homeList, setHomeList] = useState([]);

  function getHomeList() {
    //get home list from api using axios lib, then use hook useEffect to update the list as the page renders;
  }

  function addHome(home) {
    //post new house;
    // setHome([...homes, home]), we're not gonna use it now, because it's just for react;
  }

  function removeHome(id) {
    //remove one house by id;
  }

  return (
    <HomesContext.Provider value={{ homeList, addHome, removeHome }}>
      {children}
    </HomesContext.Provider>
  );
};
