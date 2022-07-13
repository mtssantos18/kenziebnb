import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1001;
  position: fixed;
  inset: 0;

  .modal {
    max-width: 450px;
    width: 95%;
    height: 500px;
    background-color: var(--grey-1);
    position: absolute;
    border-radius: 10px;
    inset: 0;
    margin: auto;
    animation: fadeInModalChat 1s ease-in-out backwards;
  }
  header {
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 5px;

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
  .containerMessages {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 95%;
    margin: 0 auto;
    height: 360px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 6px;
      background-color: var(--grey-2);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--grey-4);
      border-radius: 5px;
    }
  }
  .newMessage {
    width: 98%;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;

    position: relative;
    textarea {
      color: var(--grey-4);
      width: 98%;
      margin: 0 auto;
      height: 85px;
      padding: 10px 1rem;
      background-color: var(--grey-2);
      border-radius: 8px;
    }
    button {
      background-color: var(--grey-4);
      font-size: 15px;
      display: flex;
      align-items: center;
      color: var(--white);
      border-radius: 50%;
      justify-content: center;
      height: 30px;
      width: 30px;
      position: absolute;
      z-index: 10;
      bottom: 10px;
      right: 15px;
      transition: all 0.3s;

      :hover {
        background-color: var(--grey-3);
      }
    }
  }

  @keyframes fadeInModalChat {
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
