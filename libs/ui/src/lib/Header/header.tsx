import * as React from 'react';
import { Anchor, Container, Title } from './header.style';

export const Header = () => {
  return (
    <Container>
      <Title>Sorting Visualizer</Title>
      <p>
        by <Anchor href="https://www.lkarasinski.pl">lkarasinski</Anchor>
      </p>
    </Container>
  );
};

export default Header;
