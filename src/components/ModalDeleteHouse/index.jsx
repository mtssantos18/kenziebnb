import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { HomesContext } from "../../providers/Homes/Homes";
import Button from "../Button";
import { Container } from "./styles";

function ModalDeleteHouse({ setShowModalDelete, home }) {
  const { getHomeList, removeHome } = useContext(HomesContext);

  const history = useHistory();
  return (
    <Container>
      <div className="containerModal">
        <header>
          <h3>Deletar casa</h3>
          <MdClose onClick={() => setShowModalDelete(false)} />
        </header>
        <p>Deseja realmente apagar esse imóvel?</p>
        <div className="btnContainer">
          <button
            type="button"
            className="btnDelete"
            onClick={() => {
              removeHome(home?.id);
              getHomeList();
              setShowModalDelete(false);
              setTimeout(() => history.push("/"), 2500);
            }}
          >
            Apagar
          </button>
          <Button onClick={() => setShowModalDelete(false)}>Cancelar</Button>
        </div>
      </div>
    </Container>
  );
}

export default ModalDeleteHouse;
