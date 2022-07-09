import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const RentsContext = createContext([]);

export const RentsProvider = ({ children }) => {
  const [rents, setRents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@Kenziebnb:token");
    console.log(rents);
    api
      .get("/rents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setRents(res.data))

      .catch((err) => console.log(err));
  }, []);

  function bookHouse(rent) {
    const token = localStorage.getItem("@Kenziebnb:token");
    api
      .post("/rents", rent, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setRents([...rents, rent]);
  }

  return (
    <RentsContext.Provider value={{ rents, bookHouse }}>
      {children}
    </RentsContext.Provider>
  );
};
