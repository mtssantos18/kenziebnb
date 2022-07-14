import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  footer {
    margin-top: 3rem;
  }
  .btnContainer {
    width: 95%;
    margin: 0 auto;
    display: flex;
    gap: 3px;

    @media (min-width: 400px) {
      gap: 10px;
    }

    .btnHome,
    .btnMyHouse {
      transition: all 0.3s;
      background: #d9d9d9;
      border-radius: 10px;
      height: 26px;
      padding: 0 1rem;
      font-weight: 600;
      font-size: 11px;
      line-height: 17px;
      color: var(--grey-4);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;

      &:hover {
        background-color: var(--grey-4);
        color: #fff;
      }

      @media (min-width: 400px) {
        gap: 10px;

        font-size: 14px;
      }
    }
  }
  .containerMyHouse {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .houseForm {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 95%;
    color: var(--grey-4);
    margin: 0 auto;
    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      padding: 10px 0;
    }
    h2 {
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
    }
    .containerForm {
      width: 100%;
      border-radius: 10px;
      margin: 0 auto;
      display: flex;
      background-color: var(--grey-1);
      padding: 10px 0;
      form {
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .btnEditHome {
        display: flex;
        gap: 10px;
        button {
          width: 100%;
          font-size: 20px;
          font-weight: 700;
        }
        .btnDelete {
          width: 100%;
          background-color: #b6002e;
          color: #fff;
          height: 45px;
          border-radius: 50px;
          &:hover {
            background-color: #69001a;
          }
        }
      }
      .address {
        .addressNumberCity {
          display: flex;
        }
      }
      .capacityPrice {
        h2 {
          padding: 10px 0;
        }
        div {
          display: flex;
          width: 100%;
        }
      }
      .description {
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 10px 0;
        h2 {
          align-self: flex-start;
        }
        textarea {
          width: 95%;
          margin-left: 10px;
          margin-top: 10px;
          border-radius: 10px;
          background-color: var(--grey-2);
          padding: 10px;
        }
      }
    }
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-family: Inter;
  font-size: 16px;
  color: #495057;

  padding: 0.5rem 1.3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;

  padding: 0 1.3rem;
  margin-bottom: 1rem;

  min-height: 70%;

  @media (min-width: 800px) {
    overflow-x: hidden;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
