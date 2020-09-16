import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collegeDark, collegeLight } from "../constants"
import { QuestionButton } from "./styles"

const Wrapper = styled.div`
  margin: 20px auto;
  width: 40%;
  color: #fafafa !important;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  border: 4px solid ${collegeLight};
  padding: 4px 8px;
  color: #fafafa;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);

  transition: all 0.5s;
  &:hover {
    background-color: ${collegeLight};
  }
`;

const Input = styled.input`
  color: #fafafa;
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 10px;
  outline: none;
  border-bottom: 1px solid pink;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #d5d5d5;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #d5d5d5;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #d5d5d5;
  }
`;

const QuestionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Question = ({
  title,
  label,
  keyName,
  moveSectionDown,
  onChange,
  submitFunction,
  submit,
  initial
}) => {
  // const [value, setValue] = useState(initial);

  useEffect(() => {
  }, [keyName, initial]);

  return (
    <div className="section">
      <QuestionWrapper>
        <p>{title}</p>
      </QuestionWrapper>
      <Wrapper>
        <Input
          style={{ color: "#fafafa", outline: "#fafafa" }}
          key={keyName}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              moveSectionDown();
            }
          }}
          onChange={(e) => {
            // setValue(e.target.value);
            onChange(keyName, e.target.value);
          }}
          value={initial}
          placeholder={label}
        />
      </Wrapper>

      <QuestionButton
        onClick={() => {
          moveSectionDown();
          if(submit) { // when someone wants to submit another class
            window.scrollTo(0,0);
          }
        }}
      >
        {submit ? "Another Class" : "Enter"}
      </QuestionButton>
      {submit ? (
        <QuestionButton
          onClick={() => {
            submitFunction();
          }}
        >
          Submit
        </QuestionButton>
      ) : null}
    </div>
  );
};

export default Question;
