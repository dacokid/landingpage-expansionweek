import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 400;
    font-size: 100px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  img {
    object-fit: contain;
  }
`;
