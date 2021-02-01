import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import "../App.css";
import { collegeName } from "../constants";
import styled, { keyframes } from "styled-components";

const drop = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }

  20% {
    height: 40px;
    opacity: 1;
  }

  90% {
    height: 40px;
    opacity: 1;
  }

  100% {
    height: 0px;
    opacity: 0;
    display: none;
  }
`;

const Banner = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  background-color: #ffcb05;
  color: #00274c;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${drop} 6s ease-out;
  opacity: 0;
`;

export default function FormPage() {
  return (
    <>
      {/*<Header
        title="Form"
        description={`Fill out this form to get paired with study buddies in your class at ${collegeName}. We only match you with people we know you will vibe with.`}
      />*/}

      <Banner>The form is closed!</Banner>
      <div className="App">{/*<Form />*/}</div>
    </>
  );
}
