import React from "react";
import DishesComponent from "./components/DishesComponent";
import styled from "styled-components";
import background from "./images/background.png";

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: url(${background});
  height: 100%;
`;

const App = () => {
  return (
    <Main>
      <DishesComponent />
    </Main>
  );
};

export default App;
