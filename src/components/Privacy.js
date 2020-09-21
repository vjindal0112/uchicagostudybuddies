import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { QuestionButton } from './styles';

const Wrapper = styled.div`
  margin: 20px auto;
  width: 40%;
  color: #fafafa !important;

  @media (max-width: 768px) {
    width: 90%;
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

      <QuestionButton
        style={{"padding-right" : "14px", "padding-left" : "14px"}}
        onClick={() => {
          moveSectionDown();
        }}
      >
        Ok
      </QuestionButton>
    </div>
  );
};

export default Privacy;
