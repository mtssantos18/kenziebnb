import styled from "styled-components";

export const Container = styled.div`
  z-index: 9;
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  margin: auto;
  backdrop-filter: blur(5px);

  .containerModal {
    width: 400px;
    height: 150px;
    border-radius: 10px;
    background-color: white;
    color: var(--grey-4);
    position: absolute;
    inset: 0;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    animation: fadeInModalCancel 1s ease-in-out backwards;
    svg {
      cursor: pointer;
    }

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--blue-3);
      }
    }
    p {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
    .btnContainer {
      display: flex;
      gap: 10px;
      button {
        width: 100%;
      }
      .btnDelete {
        width: 100%;
        background-color: #b6002e;
        color: #fff;
        height: 45px;
        border-radius: 50px;
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        &:hover {
          background-color: #69001a;
        }
      }
    }
  }

  @keyframes fadeInModalCancel {
    from {
      transform: translateY(-40%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
