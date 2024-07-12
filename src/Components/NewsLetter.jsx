import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import Button from "./Button";

export default function NewsLetter() {
  return (
    <Section className="flex j-between a-center gap">
      <div className="title container flex column gap-1">
        <h2>Newsletter</h2>
        <h3>Get now free 20% discount for all products on your first order</h3>
      </div>
      <div className="newsletter flex j-center a-center gap-2">
        <div className="input-container flex j-center a-center gap-1">
          <AiOutlineMail />
          <input type="text" placeholder="Enter Your Password" />
        </div>
        <Button text="Subscribe" />
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 0;
  margin-bottom: 8rem;
  background-color: var(--dark-background);
  padding: 8rem;
  .newsletter {
    .input-container {
      background-color: var(--input-background);
      padding: 1rem;
      padding-right: 8rem;
      border: none;
      border-radius: 5px;
      font-family: 1.2rem;
      color: white;
      &:focus {
        outline: none;
      }
    }
  }
`;
