import styled, { keyframes } from "styled-components";
import { collegeDark, collegeLight } from "../constants";

export const Heading = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  padding: 10px;
  font-weight: 400;
  color: #fafafa;
`;

export const Button = styled.a`
  border: 3px solid ${collegeDark};
  border-radius: 6px;
  padding: 12px;
  margin: 24px;
  color: #fafafa;
  background-color: ${collegeDark};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  transition: all 0.5s;
  &:hover {
    background-color: #600000;
    border: 3px solid #600000;
    color: #fafafa;
  }
`;

export const Input = styled.input`
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

export const QuestionButton = styled.button`
  border: 3px solid ${collegeDark};
  background-color: ${collegeDark};
  padding: 4px 8px;
  margin: 10px;
  color: #fafafa;
  font-size: 18px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  transition: all 0.5s;
  &:hover {
    background-color: #600000;
    border: 3px solid #600000;
  }
`;

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

export const SaveBanner = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
  font-size: 18px;
  background-color: ${collegeLight};
  color: #fafafa;
  height: ${(props) => (props.animate ? "50px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  transition: all 2s cubic-bezier(0, 1.01, 0.4, 0.99);
  opacity: ${(props) => (props.animate ? "1" : "0")};
  z-index: 3;
`;

const Banner = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  background-color: ${collegeLight};
  color: #00274c;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${drop} 6s ease-out;
  opacity: 0;
`;
export const UserCount = styled.div`
  margin: 0px 8px;
  color: ${collegeLight};
  font-weight: 800;
`;
