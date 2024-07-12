import styled from "styled-components";
import price1 from "../assets/price1.png";
import price2 from "../assets/price2.png";
import price3 from "../assets/price3.png";
import price4 from "../assets/price4.png";
import bitcoin from "../assets/bitcoin.png";
import ethreum from "../assets/ethereum.png";
import ggcoin from "../assets/ggcoin.png";

export default function DailyPrices() {
  const data = [
    {
      name: "Bitcoin",
      image: bitcoin,
      short: "BTC",
      price: "$33,592.99",
      change: "+4.3%",
      marketCap: "$635.148",
      chart: price1,
    },
    {
      name: "Ethreum",
      image: ethreum,
      short: "ETH",
      price: "$2,792.19",
      change: "+2.1%",
      marketCap: "$235.128",
      chart: price2,
    },
    {
      name: "GGcoin",
      image: ggcoin,
      short: "GGC",
      price: "$349,592",
      change: "-7.3%",
      marketCap: "$57.148",
      chart: price3,
    },
    {
      name: "Bitcoin",
      image: bitcoin,
      short: "BTC",
      price: "$00,592.99",
      change: "0.0%",
      marketCap: "$27.148",
      chart: price4,
    },
  ];

  const getPriceChangeClassName = (change) => {
    const changeNum = change[0];
    if (changeNum === "+") return "green";
    else if (changeNum === "-") return "red";
    else return;
  };

  return (
    <Section className="flex gap-2 column">
      <div className="container">
        <div className="header subdue">
          <span>#</span>
          <span>Name</span>
          <span>Price</span>
          <span>Change</span>
          <span>Market</span>
          <span>Chart</span>
        </div>
        <div className="flex data column ">
          {data.map((item, index) => (
            <div key={index} className="row a-center">
              <span>{index + 1}</span>
              <div className="name flex gap-1 ca-center">
                <span className="image">
                  <img src={item.image} alt="image" />
                </span>
                <span>{item.name}</span>
                <span className="short subdue">{item.short}</span>
              </div>
              <span>{item.price}</span>
              <span className={getPriceChangeClassName(item.change)}>
                {item.change}
              </span>
              <span>{item.marketCap}</span>
              <div className="chart">
                <img src={item.chart} alt="chart" />
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #ffffff10;
  border-radius: 1rem;
  .header {
    border-bottom: 1px solid #ffffff42;
    padding: 1rem;
  }
  .header,
  .data > .row {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 0.5fr;
  }
  .data {
    padding: 1rem 2rem 2rem 2rem;
  }

  .green {
    color: var(--green);
  }
  .red {
    color: var(--red);
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    max-width: 90vw;
    overflow-y: auto;
    border-radius: 0;
    ::-webkit-scrollbar {
      height: 1px;
    }
    .container {
      width: 780px;
      .header {
      }
      .name {
        flex-direction: row;
      }
    }
  }
`;
