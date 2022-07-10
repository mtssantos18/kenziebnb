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
    gap: 10px;
    .btnHome,
    .btnMyHouse {
      background: #d9d9d9;
      border-radius: 10px;
      height: 26px;
      padding: 0 1rem;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: var(--grey-4);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
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
      }

      .address {
        .addressNumberCity {
          display: flex;
        }
      }
      .capacityPrice {
        display: flex;
        width: 100%;
      }
      .description {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        h2 {
          align-self: flex-start;
        }
        textarea {
          width: 90%;
          margin: 0 auto;
          border-radius: 10px;
          background-color: var(--grey-2);
          padding: 10px;
        }
      }
    }
  }
`;
