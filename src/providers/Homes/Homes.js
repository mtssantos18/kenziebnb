import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const HomesContext = createContext([]);

export const HomesProvider = ({ children }) => {
  const [homeList, setHomeList] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  async function getHomeList() {
    const response = await api.get("/homes");

    setHomeList(response.data);
  }

  useEffect(() => {
    getHomeList();
  }, []);

  async function addHome(home) {
    try {
      const token = localStorage.getItem("@Kenziebnb:token");
      const response = await api.post("/homes", home, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Casa adicionada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Informação insuficente para adicionar nova casa");
    }
  }

  async function editHome(id, data) {
    try {
      const token = localStorage.getItem("@Kenziebnb:token");
      const response = await api.patch(`/homes/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Alterado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    }
  }

  async function removeHome(id) {
    try {
      const token = JSON.parse(localStorage.getItem("@Kenziebnb:token"));

      const response = api.delete(`/homes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Casa removida com sucesso!");
    } catch {
      toast.error("Algo deu errado!");
    }
  }

  return (
    <HomesContext.Provider
      value={{
        editHome,
        homeList,
        setHomeList,
        addHome,
        removeHome,
        showFilterModal,
        setShowFilterModal,
        getHomeList,
      }}
    >
      {children}
    </HomesContext.Provider>
  );
};
