import { set } from "date-fns";
import { createContext, useEffect, useState } from "react";
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

  async function getUser(id) {
    try {
      const response = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Kenziebnb:token")}`,
        },
      });
      const userSelected = response.data.find((e) => e.id === +id);
      setUser(userSelected);
      return userSelected;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser(localStorage.getItem("@Kenziebnb:id"));
  }, []);

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

      // const userCopy = {
      //   id: response.data.user.id,
      //   atribution: response.data.user.atribution,
      // };

      localStorage.setItem("@Kenziebnb:token", response.data.accessToken);
      localStorage.setItem("@Kenziebnb:id", response.data.user.id);

      toast.success("Usuário logado com sucesso!");

      setTimeout(() => {
        if (response.data.user.atribution === "host") {
          history.push("/host");
        } else {
          history.push("/");
        }
      }, 3000);
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
      value={{ user, handleNavigation, signUpUser, loginUser, getUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
