import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  z-index: 99999999999;
  overflow: none;
  backdrop-filter: blur(5px);
  .containerModal {
    width: 95%;
    max-width: 400px;
    height: 530px;
    background-color: #fff;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    position: absolute;
    inset: 0;
    margin: auto;

    .btnModalRent {
      width: 95%;
      margin: 0 auto;
      margin-top: 20px;
      align-self: center;
      position: absolute;
      left: 0;
      right: 0;
    }
    header {
      display: flex;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      justify-content: space-between;
      margin-top: 10px;

      h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: var(--blue-3);
      }
      svg {
        font-size: 20px;
        color: var(--grey-3);
        cursor: pointer;

        &:hover {
          color: var(--grey-4);
        }
      }
    }
  }
  .containerDates {
    margin-top: 3px;
    background: var(--grey-2);
    border-radius: 10px;
    overflow: hidden;
    .rdrDayNumber {
      &:hover {
        transform: scale(1.1);
      }
    }
    .rdrDateRangeWrapper {
      width: 100%;
      height: 285px;
      .rdrDayDisabled {
        background-color: var(--grey-2);
        border-radius: 10px;
      }
      .rdrMonth {
        width: 100%;
        padding-bottom: 0;
      }
      .rdrMonthAndYearWrapper {
        padding: 0;
      }
      .rdrDateDisplayWrapper {
        min-height: 40px;
        padding: 5px 0;

        .rdrDateDisplay {
          height: 30px;
          margin: 0;
          width: 95%;
          margin: 0 auto;
        }
        .rdrDateInput {
          width: 135px;
        }
        .rdrDateInput input {
          height: 30px;
          width: 135px;
          font-size: 13px;
        }
      }
    }
  }
  .containerInfos {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: var(--grey-4);
    }
    .totalDayRent,
    .totalPriceRent {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 95%;
      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #000;
      }
    }
  }

  .containerModal {
    animation: fadeInModalRent 1s ease-in-out backwards;
  }
  @keyframes fadeInModalRent {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CheckinCheckoutContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: var(--grey-4);
  }
`;

export const ContainerSuccess = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);

  clip-path: circle(70.7% at 50% 50%);
  animation: successRent 1s ease-in backwards;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #418d41;
    position: absolute;
    inset: 0;
    margin: auto;
    color: #fff;

    animation: successRent 1s ease-in backwards;
    animation-delay: 0.6s;

    svg {
      animation: successRentScale 1s ease-in backwards;
      animation-delay: 1s;
      font-size: 10rem;
    }
  }

  @keyframes successRent {
    from {
      clip-path: circle(0% at 50% 50%);
    }
    to {
      clip-path: circle(70.7% at 50% 50%);
    }
  }
  @keyframes successRentScale {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
