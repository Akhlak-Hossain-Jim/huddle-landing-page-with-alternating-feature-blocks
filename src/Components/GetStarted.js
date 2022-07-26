import React from "react";
import styled from "styled-components";

export default function GetStarted() {
  return (
    <Container>
      <h1>Ready To Build your Community?</h1>
      <button>Get Started for free</button>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: min(calc(100% - 24px), 800px);
  text-align: center;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  border-radius: 16px;
  top: -184px;
  left: 50%;
  transform: translateX(-50%);
  padding: 70px 24px 52px 25px;
  @media (max-width: 548px) {
    top: -108px;
    padding: 43px 24px 41px 25px;
  }
  & > h1 {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -0.01em;
    text-transform: capitalize;
    color: var(--dark);
    @media (max-width: 548px) {
      font-size: 18px;
    }
  }
  & > button {
    margin-top: 40px;
    width: min(400px, 100%);
    text-align: center;
    border: 0;
    outline: 0;
    background-color: var(--pink);
    border-radius: 40.5px;
    padding: 27px 30px 26px;
    color: var(--light);
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    letter-spacing: 0.014em;
    text-transform: capitalize;
    @media (max-width: 548px) {
      font-size: 12px;
      padding: 13px 30px;
      width: min(200px, 100%);
      margin: 24px auto 0;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;
