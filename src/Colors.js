import React, { useState } from 'react';

import { Container, Content, Button } from './styles';

function Colors() {
  const [color, setColor] = useState('#456');

  const changeColor = (e) => {
    // let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    let randomColor = "#" + (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6);
    setColor(randomColor);
    console.log("color", randomColor)
  }

  return (
    <Container color={color}>
      <Content>
        <Button onClick={changeColor}>Change Color!</Button>
        <p>{color}</p>
      </Content>
    </Container>
  );
}

export default Colors;