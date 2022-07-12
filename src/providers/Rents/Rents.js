import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../User/User";

export const RentsContext = createContext([]);

export const RentsProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [rents, setRents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("@Kenziebnb:token");

    if (user) {
      api
        .get("/rents", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setRents(res.data))

        .catch((err) => console.log(err));
    }
  }, [user]);

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
