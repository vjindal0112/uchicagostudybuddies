import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import styled from "styled-components";

const Left = styled.h5`
  position: relative;
  left: -232px;
  top: 44px;
  width: 60px;
  display: inline-block;
  overflow-wrap: normal;

  @media (max-width: 768px) {
    left: -90px;
    top: 36px;
    font-size: 14px;
  }
`;

const Right = styled.h5`
  position: relative;
  right: -214px;
  top: 44px;
  width: 60px;
  display: inline-block;
  overflow-wrap: normal;

  @media (max-width: 768px) {
    right: -90px;
    top: 36px;
    font-size: 14px;
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

const Wrapper = styled.div`
  margin: 20px auto;
  margin-bottom: 32px;
  width: 400px;
  color: #fafafa !important;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Slider = ({ title, keyName, moveSectionDown, onChange }) => {
  const [value, setValue] = useState(2);

  useEffect(() => {
  }, [keyName]);

  return (
    <div className="section">
      <QuestionWrapper>
        <p>{title}</p>
      </QuestionWrapper>
      <Wrapper
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            moveSectionDown();
          }
        }}
      >
        <Left>Strongly Disagree</Left>
        <Right>Strongly Agree</Right>
        <RangeSlider
          key={keyName}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(keyName, e.target.value);
          }}
          min={0}
          max={4}
          tooltip="off"
          size={"sm"}
          variant={"light"}
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

export default Slider;
