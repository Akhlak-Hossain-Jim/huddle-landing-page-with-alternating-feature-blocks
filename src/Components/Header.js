import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div className="header_logo">
        <img src="/images/logo.svg" alt="huddle logo" />
      </div>
      <button className="header_button">Try It Free</button>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(8px + 5.6vmin) 0;
  gap: 24px;

  max-width: 1328px;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;

  .header {
    &_logo {
      width: calc(100px + 13.005vmin);
      img {
        width: 100%;
        height: auto;
      }
    }
    &_button {
      padding: 16px 20px 15px;
      background-color: var(--white);
      border-radius: 24px;
      box-shadow: var(--box-shadow);
      width: calc(100px + 13.005vmin);
      text-align: center;
      border: 0;
      outline: 0;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 120%;
      color: var(--dark);
      &:hover {
        opacity: 0.6;
      }
      @media (max-width: 548px) {
        padding: 6px 23px;
        font-size: 10px;
      }
    }
  }
`;
