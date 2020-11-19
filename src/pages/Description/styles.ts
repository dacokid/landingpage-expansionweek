import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h1 {
    color: #fff;
    font-weight: 400;

    span {
      color: rgba(256, 256, 256, 0.6);
    }
  }

  h3 {
    color: #f4f;
    cursor: pointer;
  }
`;
