import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { Container } from "./styles";
import { toast } from "react-toastify";

function Header() {
  const [logged, setLogged] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("@Kenziebnb:token");

    if (token) {
      setLogged(true);
    }
  }, []);

  function handleLogin() {
    history.push("/login");
  }
  function handleLogout() {
    toast.success("Você saiu!");
    localStorage.clear();
    setLogged(false);
    setTimeout(() => {
      history.push("/");
    }, 2500);
  }

  function handleToggleProfile() {
    setModalProfile(!modalProfile);
  }
  function handleMyProfile() {
    history.push("/mypanel");
  }
  return (
    <Container>
      <div className="divHeader">
        <h1>KenzieBnB</h1>
        {logged ? (
          <div className="divProfile">
            <button className="btnProfile" onClick={handleToggleProfile}>
              <MdPerson />
            </button>
            {modalProfile && (
              <div className="modalProfile">
                <div className="containerButtonProfile">
                  <button onClick={handleLogout}>Logout</button>
                  <button onClick={handleMyProfile}>Painel de controle</button>
                </div>
                <span />
              </div>
            )}
          </div>
        ) : (
          <button className="btnLogin" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </Container>
  );
}

export default Header;
