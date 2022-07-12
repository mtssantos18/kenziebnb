import { createContext, useContext, useEffect, useState } from "react";

import api from "../../services/api";

import { UserContext } from "../User/User";

import { toast } from "react-toastify";

export const RentsContext = createContext([]);

export const RentsProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [rents, setRents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@Kenziebnb:token");

    if (user) {
      api
        .get("/rents", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setRents(res.data));
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
      .then((res) => {
        setRents([...rents, res.data]);
      })
      .catch((err) => toast.error("Tente novamente mais tarde"));
  }

  function deleteBookHouse(bookId) {
    const token = localStorage.getItem("@Kenziebnb:token");

    const newList = rents.filter((elem) => elem.id !== bookId);

    setRents(newList);

    api
      .delete(`/rents/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => toast.success("Reserva cancelada"))
      .catch((err) => toast.error("Algo deu errado"));
  }

  return (
    <RentsContext.Provider value={{ rents, bookHouse, deleteBookHouse }}>
      {children}
    </RentsContext.Provider>
  );
};
