import React from "react";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <p>Com foco, a produtividade pode aumentar exponencialmente;</p>
      <h4>Mas como manter?</h4>
      <p>É necessário direcionar o fluxo de pensamento;</p>
      <h2>É dessa maneira que seus ídolos conseguiram;</h2>
      <h3>E hoje estão em um nível acima</h3>
      <h1>🚀</h1>

      <p className="endofpage">
        Projeto desenvolvido como desafio da Expansion Week, por @dacokid
      </p>
    </Container>
  );
};

export default Footer;
