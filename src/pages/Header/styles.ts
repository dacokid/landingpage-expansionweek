import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;

  display: flex;
  font-family: "Goldman", cursive;
  align-items: center;

  h1 {
    display: flex;
    position: relative;
    color: rgba(256, 256, 256, 0.5);
    opacity: 0.8;
    margin: 0 auto;
    font-size: 75px;
    &::before {
      content: attr(title);
      position: absolute;
      width: 100%;
      height: 100%;
      color: cyan;
      bottom: 3px;
      mix-blend-mode: color-dodge;
    }
    &::after {
      content: attr(title);
      position: absolute;
      width: 100%;
      height: 100%;
      color: red;
      top: 3px;
      mix-blend-mode: color-dodge;
    }
  }
`;
