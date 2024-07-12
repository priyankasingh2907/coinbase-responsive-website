import styled from "styled-components";
import spacemen from "../assets/spacemen.png";
import cards from "../assets/cards.png";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  const companyLinks = [
    "About ",
    "Careers",
    "Affiliates",
    "Blog",
    "Investors",
    "Legal & Privacy",
    "Cookie Policy",
    "Cookie prefrences",
  ];
  const LearntLinks = [
    "Browse Crypto prices",
    "Coinbase Bytes newsletter",
    "Tips & Turorials",
    "Market Updates",
    "What is Bitcoin?",
    "What is BlockChain",
    " How to set up a crypto waller",
    "How to send crypto",
  ];
  const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];
  return (
    <Foot className="flex column gap">
      <div className="upper-footer">
        <div className="flex column gap-1">
          <div className="brand">
            <h2>coinbase</h2>
          </div>
          <div className="address">
            <p>
              GyaVast , 18 East 50th Stress, 4th Floor , New York , NY 10022
            </p>
          </div>
          <div className="info ">
            <span className="m">T : +1-202-555-0184</span>
            <span>E : Hello@crypto.com</span>
          </div>
          <div className="social-icons flex gap-2">
            {socialIcons.map((icon) => (
              <span key={icon} className="icon">
                {icon}
              </span>
            ))}
          </div>
        </div>
        <div className="flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="flex column gap-1">
          <div className="title">
            <h3>Learn</h3>
          </div>
          <ul className="flex column gap-half">
            {LearntLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className="col spacemen">
          <div className="image">
            <img src={spacemen} alt="spacemen" />
          </div>
        </div>
      </div>
      <div className="lower-footer flex a-center j-between gap">
        <div className="col1">
          <span>&copy; 2024 Coinbase. All rights reserved.</span>
        </div>
        <div className="col2 flex a-center gap">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span className="cards">
            <img src={cards} alt="cards" />
          </span>
        </div>
      </div>
    </Foot>
  );
}
const Foot = styled.footer`
  padding: 0rem 5rem;
  padding-bottom: 3rem;
  position: relative;

  .upper-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    align-items: center;
    justify-items: center;
    .social-icons {
      margin-top: 2rem;
      svg {
        font-size: 2rem;
      }
    }
    .spacemen {
      position: absolute;
      right: 0rem;
      top: -23rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 2rem;
    margin: 0;
    .social-icons {
      display: none;
      flex-direction: row;
    }
    .upper-footer {
      margin-top: o;
      grid-template-columns: 1fr;
      gap: 2rem;
      .brand {
        text-align: center;
      }
      .address > p {
        text-align: center;
        font-size: 1.5rem;
      }
      .info {
        text-align: center;
      }
    }
    .spacemen {
      display: none;
    }
    .cards {
      img {
        width: 80vw;
      }
    }
  }
  .lower-footer {
    flex-direction: column;
    .col2 {
      flex-direction: column;
    }
  }
`;
