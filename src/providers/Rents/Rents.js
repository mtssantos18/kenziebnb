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
