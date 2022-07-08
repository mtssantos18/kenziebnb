import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState({});

  function handleNavigation(path) {
    history.push(path);
  }

  async function signUpUser(formData) {
    try {
      const response = await api.post("/signup", formData);

      toast.success("Usuário cadastrado com sucesso!");

      setTimeout(() => history.push("/login"), 3000);
    } catch (error) {
      toast.error("Email já cadastrado");
    }
  }

  async function loginUser(formData) {
    try {
      const response = await api.post("/login", formData);

      toast.success("Usuário logado com sucesso!");

      setTimeout(() => history.push("/"), 3000);
    } catch (error) {
      toast.error("Email ou senha errada!");
    }
  }

  return (
    <UserContext.Provider
      value={{ user, handleNavigation, signUpUser, loginUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
