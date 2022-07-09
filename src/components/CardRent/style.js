import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-2);
  height: 479px;
  width: 95%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px 20px 0px 20px;
  margin: 20vh 0px 0px 1em;
  .card-rent__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
  }
  .card-rent__container1 {
    display: flex;
    gap: 81px;
  }
  .card-rent__container2 {
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: 8px 0px 3px 0px;
    p,
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
    }
  }
  .card-rent__text {
    display: flex;
    gap: 3px;
    p {
      font-weight: 700;
      font-size: 11px;
      line-height: 13px;
      color: #495057;
    }
    span {
      font-size: 11px;
      line-height: 13px;
      color: #495057;
    }
  }
  .card-rent__text2 {
    display: flex;
    flex-direction: column;
    gap: 6px;
    h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #495057;
    }
    div {
      display: flex;
      gap: 3px;
    }
    p {
      font-weight: 700;
      font-size: 11px;
      line-height: 13px;
      color: #495057;
    }
    span {
      font-size: 11px;
      line-height: 13px;
      color: #495057;
    }
  }
  .card-rent__text3 {
    display: flex;
    flex-direction: column;
    gap: 6px;
    div {
      display: flex;
      gap: 3px;
    }
    p {
      font-weight: 700;
      font-size: 11px;
      line-height: 13px;
      color: #495057;
    }
    span {
      font-size: 11px;
      line-height: 13px;
      color: #495057;
    }
  }
  .card-rent__title {
    font-weight: 600;
    font-size: 11px;
    line-height: 19px;
    padding-top: 5px;
    padding-bottom: 11px;
    color: #495057;
  }

  img {
    height: 176px;
    width: 263px;
    border-radius: 10px;
    margin-top: 10px;
  }
  .card-rent__span {
    span {
      padding: 3px 10px;
      background: #adb5bd;
      border-radius: 10px;
      font-weight: 600;
      font-size: 11px;
      line-height: 13px;
      color: #ffffff;
    }
  }
  button {
    position: absolute;
    width: 189px;
    height: 34px;
    background-color: #ab2b2b;
    border-radius: 40px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    margin: 6% 0% 0% 12%;
  }
`;
export const Title = styled.h2`
  position: absolute;
  width: 100%;
  height: 19px;
  padding: 0px 0px 0px 24px;
  margin: -25px 0px 0px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 19px;
  color: #495057;
`;
