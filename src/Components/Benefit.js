import React from "react";
import styled from "styled-components";

const BenefitCard = ({ title, description, img, width }) => {
  return (
    <BenefitCardCon maxW={width}>
      <div className="card_text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="card_img">
        <img src={`/images/${img}.svg`} alt="" />
      </div>
    </BenefitCardCon>
  );
};
const BenefitCardCon = styled.div`
  display: flex;
  flex-basis: 1;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  border-radius: 16px;
  padding: 55px 32px 52.27px;
  gap: 56.64px;
  &:nth-child(even) {
    flex-direction: row-reverse;
    @media (max-width: 548px) {
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 548px) {
    flex-direction: column-reverse;
    padding: 56px 39px 33px;
  }
  .card {
    &_text {
      max-width: ${({ maxW }) => (maxW ? maxW : "512px")};
      margin-left: calc(10px + 10.274vmin);
      @media (max-width: 548px) {
        text-align: center;
        margin: 0;
      }
      & > h1 {
        font-family: var(--font-secondary);
        font-weight: 600;
        font-size: 28px;
        line-height: 120%;
        text-transform: capitalize;
        color: var(--dark);
        @media (max-width: 548px) {
          font-size: 20px;
        }
      }
      & > p {
        padding-top: 13px;
        color: var(--gray);
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        @media (max-width: 548px) {
          font-size: 14px;
        }
      }
    }
    &_img {
      @media (max-width: 548px) {
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default function Benefit() {
  const DATA = [
    {
      title: "Grow Together",
      description:
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      img: "illustration-grow-together",
    },
    {
      title: "Flowing Conversations",
      description:
        "You wouldn’t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      img: "illustration-flowing-conversation",
      width: "510px",
    },
    {
      title: "Your Users",
      description:
        "It takes no time at all to integrate Huddle with your app’s authentication solution. This means, once signed in to your app. your users can start chatting immediately.",
      img: "illustration-your-users",
      width: "493px",
    },
  ];
  return (
    <Container>
      {DATA.map((data) => (
        <BenefitCard {...data} />
      ))}
    </Container>
  );
}

const Container = styled.section`
  max-width: 1281px;
  margin: 0 auto;
  padding: 13.004vmin 24px 44.604vmin;
  display: flex;
  flex-direction: column;
  gap: 42px;
  @media (max-width: 548px) {
    gap: 40px;
  }
`;
