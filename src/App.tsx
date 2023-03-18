import React from 'react';
import pikachuImg from './assets/pikachu.jpg';
import {
  AppContainerDiv,
  AppHeader,
  ExampleImage,
  LinkA,
  TextP,
} from './App.styles';

const App = (): JSX.Element => {
  return (
    <AppContainerDiv>
      <AppHeader>
        <ExampleImage src={pikachuImg} alt="pikachu" />
        <TextP>Pikachu</TextP>
        <LinkA
          href="https://richard-netto.github.io/"
          target="_self"
          rel="noopener noreferrer"
        >
          Back
        </LinkA>
      </AppHeader>
    </AppContainerDiv>
  );
};

export default App;
