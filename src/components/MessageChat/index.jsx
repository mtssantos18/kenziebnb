import React from "react";

import { Container } from "./styles";

export const MessageChat = ({ message, owner, tenant }) => {
  const date = new Date(message?.time);
  return (
    <Container>
      <h4>
        {message?.sentBy === "tenant"
          ? tenant && tenant?.name
          : owner?.user.name}
      </h4>
      <p>{message?.message}</p>
      <small>{`${date?.getDay() < 10 ? `0${date?.getDay()}` : date?.getDay()}/${
        date?.getMonth() < 10 ? `0${date?.getMonth()}` : date?.getMonth()
      }/${date?.getFullYear()} às ${date?.getHours()}:${date?.getMinutes()} hrs`}</small>
    </Container>
  );
};
