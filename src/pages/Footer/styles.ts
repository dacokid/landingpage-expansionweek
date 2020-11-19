import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .endofpage {
    font-size: 12px;
    position: absolute;
    bottom: 0;
  }
`;
