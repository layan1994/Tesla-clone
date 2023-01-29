import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImage="model-s.jpg"
        leftBtntext="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImage="model-3.jpg"
        leftBtntext="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model x"
        description="Order online for touchless delivery"
        backgroundImage="model-x.jpg"
        leftBtntext="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImage="model-y.jpg"
        leftBtntext="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money Back guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtntext="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money Back guarantee"
        backgroundImage="solar-roof.jpg"
        leftBtntext="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImage="accessories.jpg"
        leftBtntext="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
