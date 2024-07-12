import styled from "styled-components";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
// import Button from "./Button";

export default function Navbar() {
  const [isNavOpen, setIsNanOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNanOpen(false));
  const links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];
  return (
    <Nav className="flex j-between a-center" state={isNavOpen ? 1 : 0}>
      <div className="brand">
        <h2>Coinbase</h2>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNanOpen(false)} />
        ) : (
          <GiHamburgerMenu onClick={() => setIsNanOpen(true)} />
        )}
      </div>
      <div className="links">
        <ul className="flex gap-2">
          {links.map((links) => (
            <li key={links}>
              <a href="#">{links}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="auth flex gap-1">
        <Button text="Sign In" subdueButton />
        <Button text="Sign Up" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  margin: 3rem 5rem;
  .brand {
    h2 {
      font-size: 2.5rem;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      font-weight: bolder;
      li {
        cursor: pointer;
        &:first-of-type {
          a {
            opacity: 1;
          }
        }
        a {
          opacity: 0.7;
          transition: 0.5s ease-in-out;
          &:hover {
            opacity: initial;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 3rem 1rem;
    margin: 0;
    position: relative;

    z-index: 5;
    flex-direction: row;
    .brand {
      h2 {
        font-size: 2rem;
      }
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        color: #2d69fd;
      }
    }

    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      z-index: 10;
      position: fixed;
      overflow: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => {
        state ? "60%" : "0%";
      }};
      height: 100vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: #2d69f4;
          }
        }
      }
    }
    .auth {
      display: none;
    }
  }
`;
