import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  overflow-x: none;

  footer {
    margin-top: 1rem;
  }
  .btnContainer {
    width: 95%;
    margin: 0 auto;
    .btnHome {
      background: #d9d9d9;
      border-radius: 10px;
      height: 26px;
      width: 67px;
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
  .btnRent {
    width: 95%;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .containerHouse {
    width: 95%;
    margin: 0 auto;

    h2 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: var(--grey-4);
      margin-top: 12px;
    }
  }
  .Container {
    display: flex;
    flex-direction: column;
  }
  .containerInfo {
    color: var(--grey-4);
    display: flex;
    flex-direction: column;
    gap: 10px;
    .capacity {
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      color: var(--grey-4);
      margin-top: 8px;

      span {
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
      }
    }
    .value {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: var(--grey-4);
      span {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
      }
    }
    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }
    .description {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
  }

  @media (min-width: 375px) {
    .Container {
      width: 85%;
      margin: 0 auto;
    }
  }
  @media (min-width: 900px) {
    footer {
      margin: 0;
    }
    .containerInfo {
      padding: 1rem 0;
      justify-content: space-evenly;
      .value {
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        span {
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
        }
      }
      h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
      }
      .description {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }
      .btnRent {
        width: 70%;
      }
      h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
      }
      .capacity {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        span {
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
    .Container {
      width: 90%;
    }
    .containerHouse {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 7px;
      position: relative;
      .containerInfo {
        margin-top: 1rem;
      }
    }
  }
`;
