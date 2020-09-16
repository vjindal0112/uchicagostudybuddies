import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import { QuestionButton } from "./styles"

const Wrapper = styled.div`
  margin: 20px auto;
  width: 40%;
  color: #fafafa !important;

  @media (max-width: 768px) {
    width: 90%;
  }
`;



const QuestionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: "black",
    padding: 20,
  }),
};

const SelectBar = ({
  title,
  label,
  keyName,
  choices,
  moveSectionDown,
  onChange,
  initial,
  reset
}) => {
  // const [value, setValue] = useState(initial);
  useEffect(() => {
  }, [keyName, choices, initial, reset]);

  return (
    <div className="section">
      <QuestionWrapper>
        <p>{title}</p>
      </QuestionWrapper>
      <Wrapper>
        <Select
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              moveSectionDown();
            }
          }}
          placeholder={label}
          key={reset ? `${keyName}_${reset}` : keyName}
          styles={customStyles}
          options={choices}
          inputValue={initial}
          onInputChange={(e) => {
            if (e !== "" && typeof e != "object") {
              onChange(keyName, e);
            } else if (initial.length === 1 && typeof e != "object") {
              onChange(keyName, e);
            }
          }}
          onChange={(newValue, actionMeta) => {
            if (actionMeta.action === "select-option") {
              onChange(keyName, newValue.value);
            }
          }}
        />
      </Wrapper>

      <QuestionButton
        onClick={() => {
          moveSectionDown();
        }}
      >
        Enter
      </QuestionButton>
    </div>
  );
};

export default SelectBar;
