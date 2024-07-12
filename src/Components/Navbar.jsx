import styled from "styled-components";
import Button from "./Button";

export default function Navbar() {
  const links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];
  return (
    <Nav className="flex j-between a-center">
      <div className="brand">
        <h2>Coinbase</h2>
      </div>
      <div className="toggle"></div>
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
`;
