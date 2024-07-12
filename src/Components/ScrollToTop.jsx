import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import styled from "styled-components";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageXOffset > 100 ? setShow(true) : setShow(false);
  });

  return (
    <Div>
      <a href="#" className={`${show ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--blue);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 24;
    svg {
      color: white;
      font-size: 1.3rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 75vw;
      right: initial;
    }
  }
`;
