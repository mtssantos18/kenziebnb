import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-2);

  min-width: 280px;
  max-width: 300px;
  height: 515px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1rem;
`;

export const ImgDiv = styled.div`
  /* margin: 0 auto; */
  img {
    margin: 0 auto;

    width: 100%;
    max-width: 350px;
    max-height: 178.66px;
  }
`;

export const BookingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  color: var(--grey-4);

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 600;

    span {
      font-weight: 400;
    }
  }
  .containerBtn {
    display: flex;
    gap: 5px;
    button {
      transition: all 0.3s;
      background-color: #ab2b2b;

      border-radius: 40px;

      margin: 0 auto;

      width: 100%;
      max-width: 250px;
      height: 40px;

      font-size: 16px;
      font-weight: 700;
      color: var(--white);

      :hover {
        background-color: #ff1b11;
      }
    }
    .btnPending {
      width: 80%;
      background-color: var(--green-1);
      :hover {
        background-color: #54aa54;
      }
    }
  }
`;

export const PeriodAndPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 0.3rem;

  p {
    color: var(--black);
  }
`;

export const HostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--blue-3);

    border-radius: 10px;

    margin: 0 auto;

    position: relative;

    width: 35px;
    height: 30px;

    font-size: 16px;
    font-weight: 700;
    color: var(--white);

    :hover {
      background-color: var(--blue-2);
    }
    .iconMsg {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: #b00f0f;
      color: #fff;
      border-radius: 50%;
      height: 18px;
      width: 18px;
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export const SpanSuccess = styled.span`
  background-color: var(--green-1);

  color: var(--white);
  font-weight: 500;
  font-size: 15px;

  padding: 0.2rem;

  border-radius: 10px;
`;
export const SpanPending = styled.span`
  background-color: var(--grey-3);

  color: var(--white);
  font-weight: 500;
  font-size: 15px;

  padding: 0.2rem;

  border-radius: 10px;
`;
