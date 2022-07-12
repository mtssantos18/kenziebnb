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
  }
`;

export const BookingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

  button {
    background-color: #ab2b2b;

    border-radius: 40px;

    margin: 0 auto;

    width: 80%;
    max-width: 250px;
    height: 40px;

    font-size: 16px;
    font-weight: 700;
    color: var(--white);

    :hover {
      background-color: #ff1b11;
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
