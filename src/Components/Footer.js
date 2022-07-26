import React from "react";
import styled from "styled-components";
import GetStarted from "./GetStarted";
import { ImLocation } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <GetStarted />
      <footer className="footer">
        <div className="footer_logo">
          <img src="/images/logo-white.svg" alt="logo" />
        </div>
        <div className="footer_links">
          <div className="footer_links__1">
            <div className="footer_links__1_option">
              <ImLocation />
              <p className="footer_links__1_option__link">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="footer_links__1_option">
              <FiPhoneCall />
              <a
                href="tel:+1-543-123-4567"
                className="footer_links__1_option__link"
              >
                +1-543-123-4567
              </a>
            </div>
            <div className="footer_links__1_option">
              <HiMail />
              <a
                href="mailto:example@huddle.com"
                className="footer_links__1_option__link"
              >
                example@huddle.com
              </a>
            </div>
          </div>
          <div className="footer_links__2">
            <div className="footer_links__2_rows">
              <a
                className="footer_links__2_rows__link"
                href="a"
                onClick={(e) => e.preventDefault()}
              >
                About Us
              </a>
              <a
                className="footer_links__2_rows__link"
                href="a"
                onClick={(e) => e.preventDefault()}
              >
                What We Do
              </a>
              <a
                className="footer_links__2_rows__link"
                href="a"
                onClick={(e) => e.preventDefault()}
              >
                FAQ
              </a>
            </div>
            <div className="footer_links__2_rows">
              <a
                className="footer_links__2_rows__link"
                href="a"
                onClick={(e) => e.preventDefault()}
              >
                Career
              </a>
              <a
                className="footer_links__2_rows__link"
                href="a"
                onClick={(e) => e.preventDefault()}
              >
                Blog
              </a>
              <a
                className="footer_links__2_rows__link"
                href="a"
                onClick={(e) => e.preventDefault()}
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="footer_links__3">
            <a
              href="a"
              onClick={(e) => e.preventDefault()}
              className="footer_links__3_link"
            >
              <FaFacebookF />
            </a>
            <a
              href="a"
              onClick={(e) => e.preventDefault()}
              className="footer_links__3_link"
            >
              <FaTwitter />
            </a>
            <a
              href="a"
              onClick={(e) => e.preventDefault()}
              className="footer_links__3_link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <p className="footer_owner">
          © Copyright 2018 Huddle. All rights reserved.
        </p>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding: 192px 0 0;
  background-color: var(--dark);
  @media (max-width: 548px) {
    padding: 138px 0 0;
  }
  .footer {
    width: min(1248px, 100%);
    padding: 0 24px 122px;
    margin: 0 auto;
    @media (max-width: 548px) {
      padding: 0 16px 48px;
    }
    &_logo {
      width: calc(140px + 13.005vmin);
      img {
        width: 100%;
        height: auto;
      }
    }
    &_links {
      color: var(--light);
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 548px) {
        flex-direction: column;
      }
      &__1 {
        padding-top: 27px;
        padding-right: 18.47vmin;
        @media (max-width: 548px) {
          padding-right: 0;
        }
        &_option {
          max-width: 376px;
          padding: 12px 0;
          display: flex;
          gap: 18px;
          font-size: 18px;
          &:first-child {
            font-size: 48px;
          }
          &:not(:first-child) {
            align-items: center;
          }
          &__link {
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: var(--light);
            text-decoration: none;
          }
        }
      }
      &__2 {
        display: flex;
        gap: 15.61vmin;
        padding-top: 27px;
        padding-right: 20.02vmin;
        @media (max-width: 548px) {
          padding-right: 0;
          padding-top: 56px;
          flex-direction: column;
          gap: 24px;
        }
        &_rows {
          display: flex;
          flex-direction: column;
          gap: 24px;
          &__link {
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            color: var(--light);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      &__3 {
        padding-top: 27px;
        display: flex;
        /* align-items: center; */
        gap: 13px;
        @media (max-width: 548px) {
          padding-top: 52px;
          justify-content: center;
        }
        &_link {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          color: var(--light);
          height: 31px;
          aspect-ratio: 1/1;
          border-radius: 50%;
          border: 1px solid var(--light);
          &:hover {
            color: var(--pink);
            border-color: var(--pink);
          }
        }
      }
    }
    &_owner {
      position: absolute;
      bottom: 64px;
      right: 79px;
      color: var(--gray);
      font-weight: 600;
      font-size: 12px;
      line-height: 150%;

      @media (max-width: 548px) {
        font-size: 11px;
        padding-top: 23px;
        position: relative;
        right: 0;
        bottom: 0;
        text-align: center;
      }
    }
  }
`;
