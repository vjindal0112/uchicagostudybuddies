import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Button } from "../components/styles" // styles used for shared styles

const Texth4 = styled.h4`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Submitted = () => {
  return (
    <>
      <Header title="Submitted" />
      <div className="App">
        <h1>Congrats, and good luck!</h1>
        <Texth4>
          You will hear back from us via email on October 6th with your study buddies!
        </Texth4>
        <Button href="/form">Another Class</Button>
      </div>
    </>
  );
};
export default Submitted;
