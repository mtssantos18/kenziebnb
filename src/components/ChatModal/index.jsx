import React, { useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import { MdClose } from "react-icons/md";
import { MessageChat } from "../MessageChat";
import { RiMailSendFill } from "react-icons/ri";
import { UserContext } from "../../providers/User/User";
import { RentsContext } from "../../providers/Rents/Rents";
import { toast } from "react-toastify";

function ChatModal({ myRent, messages, setShowModalChat, tenant, owner }) {
  const [value, setValue] = useState("");

  const { newMessage } = useContext(RentsContext);

  const { user, getUser } = useContext(UserContext);

  async function handleSendMessage() {
    if (value === "") {
      toast.error("A mensagem não pode estar vazia!");
      return;
    }
    const message = {
      message: value,
      sentBy: user?.atribution,
      time: new Date(),
      tenantId: tenant?.id,
      hostId: owner?.user?.id,
    };
    const newArray = [...messages, message];
    myRent.messages = newArray;
    await newMessage(myRent?.id, myRent);
    setValue("");
  }

  useEffect(() => {
    getUser(user.id);
  }, []);
  return (
    <Container>
      <div className="modal">
        <header>
          <h2>Mensagens</h2>
          <MdClose onClick={() => setShowModalChat(false)} />
        </header>
        <ul className="containerMessages">
          {tenant &&
            messages
              ?.filter(
                (elem) =>
                  elem.tenantId === tenant?.id &&
                  elem.hostId === owner?.user?.id
              )
              .sort(
                (a, b) =>
                  new Date(a.time).getTime() - new Date(b.time).getTime()
              )
              .map((message, index) => {
                return (
                  <MessageChat
                    key={index}
                    message={message}
                    owner={owner}
                    tenant={tenant}
                  />
                );
              })}
        </ul>
        <div className="newMessage">
          <textarea
            onChange={(e) => setValue(e.target.value)}
            placeholder="Digite sua mensagem..."
          ></textarea>
          <button onClick={handleSendMessage}>
            <RiMailSendFill />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default ChatModal;
