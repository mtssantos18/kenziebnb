import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState(null);

  function handleNavigation(path) {
    history.push(path);
  }

  async function signUpUser(formData) {
    try {
      // eslint-disable-next-line no-unused-vars
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
      console.log(response);

      setUser(response.data.user);

      localStorage.setItem(
        "@Kenziebnb:token",
        JSON.stringify(response.data.accessToken)
      );

      toast.success("Usuário logado com sucesso!");

      setTimeout(() => history.push("/"), 3000);
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data === "Cannot find user") {
        toast.error("Email inválido");
      } else {
        toast.error("Senha inválida");
      }
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
