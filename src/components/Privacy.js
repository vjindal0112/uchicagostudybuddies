import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px auto;
  width: 40%;
  color: #fafafa !important;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  border: 4px solid #ffcb05;
  padding: 4px 8px;
  color: #fafafa;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);

  transition: all 0.5s;
  &:hover {
    background-color: #ffcb05;
  }
`;

const QuestionWrapper = styled.div`
  max-width: 32em;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Privacy = ({ message, moveSectionDown }) => {

  return (
    <div className="section">
      <QuestionWrapper
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            moveSectionDown();
          }
        }}
      >
        <p>{message}</p>
      </QuestionWrapper>

      <Button
        onClick={() => {
          moveSectionDown();
        }}
      >
        Ok
      </Button>
    </div>
  );
};

export default Privacy;
