import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";

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
}) => {
  const [value, setValue] = useState("");
  useEffect(() => {}, [keyName, choices, value]);

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
          key={keyName}
          styles={customStyles}
          options={choices}
          inputValue={value}
          onInputChange={(e) => {
            if (e !== "" && typeof e != "object") {
              setValue(e);
            } else if (value.length === 1 && typeof e != "object") {
              setValue(e);
            }
          }}
          onChange={(newValue, actionMeta) => {
            if (actionMeta.action === "select-option") {
              onChange(keyName, newValue.value);
              setValue(newValue.value);
            }
          }}
        />
      </Wrapper>

      <Button
        onClick={() => {
          moveSectionDown();
        }}
      >
        Enter
      </Button>
    </div>
  );
};

export default SelectBar;
