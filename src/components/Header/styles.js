import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 63px;
  background: var(--blue-3);

  .divHeader {
    display: flex;
    width: 85%;
    height: 100%;
    margin: 0 auto;

    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #fff;
  }
  .btnProfile {
    transition: all 0.2s;
    width: 36px;
    height: 36px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--grey-2);

    font-size: 24px;
    color: var(--grey-4);

    &:hover {
      background-color: var(--grey-4);
      color: #fff;
    }
  }
  div .btnLogin {
    transition: all 0.2s;
    width: 90px;
    height: 36px;

    background: var(--grey-2);
    border-radius: 50px;

    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: var(--grey-4);

    &:hover {
      background-color: var(--grey-4);
      color: #fff;
    }
  }

  .divProfile {
    position: relative;
  }
  .modalProfile {
    position: absolute;
    width: 160px;
    height: 90px;
    top: 46px;
    right: 0;
    z-index: 999;
    /* grey-2 */

    background: var(--grey-2);
    border-radius: 4px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .modalProfile span {
    width: 8px;
    height: 8px;
    background: var(--grey-2);
    position: absolute;
    top: -4px;
    right: 14px;
    transform: rotate(45deg);
    z-index: -1;
  }
  .containerButtonProfile {
    z-index: 999;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .containerButtonProfile button {
    transition: all 0.2s;
    padding: 0 10px;
    height: 30px;
    background-color: var(--grey-1);
    border-radius: 10px;
    width: 95%;
    margin: 0 auto;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--grey-4);

    &:hover {
      background: var(--grey-3);
    }
  }

  @media screen and (min-width: 900px) {
    .divHeader {
      width: 75%;
    }
  }
`;
