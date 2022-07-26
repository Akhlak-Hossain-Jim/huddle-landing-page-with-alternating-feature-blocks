import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <div className="hero_container">
        <div className="hero_container__left">
          <h1>Build the community your fans will love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Get Started For Free</button>
        </div>
        <div className="hero_container__right">
          <img src="/images/illustration-mockups.svg" alt="mock up" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("/images/bg-hero-desktop.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top left;
  @media (max-width: 548px) {
    background-image: url("/images/bg-hero-mobile.svg");
  }
  .hero_container {
    max-width: 1328px;
    margin: 0 auto;
    padding: 10px 24px 65.61px;

    display: flex;
    flex: 1;
    gap: 8.8427vmin;
    align-items: center;
    @media (max-width: 548px) {
      flex-direction: column;
      gap: 53px;
    }
    &__left {
      width: min(513px, 100%);
      display: flex;
      flex-direction: column;
      & > h1 {
        font-family: var(--font-secondary);
        font-weight: 600;
        font-size: 40px;
        line-height: 150%;
        text-transform: capitalize;
        color: var(--dark);
        @media (max-width: 548px) {
          font-size: 25px;
          line-height: 140%;
          text-align: center;
          letter-spacing: -0.03em;
        }
      }
      & > p {
        padding-top: 28px;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        text-transform: capitalize;
        color: var(--gray);
        @media (max-width: 548px) {
          padding-top: 22px;
          font-size: 16px;
          color: var(--dark);
          text-align: center;
        }
      }
      & > button {
        margin-top: 32px;
        width: min(280px, 100%);
        text-align: center;
        border: 0;
        outline: 0;
        background-color: var(--pink);
        border-radius: 28px;
        padding: 20px 30px 22px;
        color: var(--light);
        font-weight: 700;
        font-size: 14px;
        line-height: 100%;
        @media (max-width: 548px) {
          font-size: 12px;
          width: min(280px, 100%);
          margin: 32px auto 0;
          padding: 12px 30px 16px;
        }
        &:hover {
          opacity: 0.7;
        }
      }
    }
    &__right {
      width: 698px;
      @media (max-width: 548px) {
        width: 100%;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
