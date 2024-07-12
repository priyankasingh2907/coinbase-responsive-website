import styled from "styled-components";
import Button from "../Components/Button";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <Section className="flex j-center a-ecnter gap">
      <div className="content flex column gap-2">
        <div className="subtitle">
          <h3 className="flex a-center gap-1 blue">
            <span>
              <img src={badgePercent} alt="badgePercent" />
            </span>
            Investment Made Easy
          </h3>
        </div>
        <div className="title">
          <h1>The Easies way to Track Multiple Currencies</h1>
        </div>
        <div className="description">
          <div className="subdue">
            <p>
              {" "}
              Market Watchman allow you tu monitor your balances, trade without,
              limits and earn rewards for specific coins.
            </p>
          </div>
          <div className="buttons flex gap-1 m">
            <Button text="Try Now " icon={<FaChevronCircleRight />} />
            <Button text="How it works ?" subdueButton />
          </div>
        </div>
      </div>
      <img src={home} alt="home" className="half-width" />
    </Section>
  );
}

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .subtitle {
      h3 {
        display: flex;
      }
    }
    .buttons {
      flex-direction: row;
      margin: 1rem;
      gap: 1rem;
    }
  }
`;
