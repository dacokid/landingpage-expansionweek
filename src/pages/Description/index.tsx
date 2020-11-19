import React, { useState } from "react";

import { Container } from "./styles";

const Description: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <Container>
      <h1>
        É preciso ter foco para conseguir alcançar os objetivos...{" "}
        <span>um de cada vez</span>
      </h1>
      {hidden ? <h3>Mesmo as menores, podem ser difíceis de lidar</h3> : <h3 onClick={handleClick}>Se livre de distrações</h3>}
    </Container>
  );
};

export default Description;
