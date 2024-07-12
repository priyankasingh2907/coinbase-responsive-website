import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

export default function Service() {
  const serviceData = [
    {
      image: service1,
      title: "Manage your protofolio",
      description:
        "Coinbase supports a variety of the most popular digital currencies",
    },
    {
      image: service2,
      title: "Recurring buys",
      description:
        "Coinbase supports a variety of the most popular digital currencies",
    },
    {
      image: service3,
      title: "Mobile apps",
      description:
        "Coinbase supports a variety of the most popular digital currencies",
    },
  ];
  return (
    <Section className="flex column j-center a-center gap">
      <div className="title container flex column gap-1">
        <div className="title text-center">
          <h2>Start Start your trading with us</h2>
        </div>
        <div className="subtitle text-center subdue">
          <h3>
            Market Watchmen has a variety of features that make it the best
            place to start trading
          </h3>
        </div>
      </div>
      <div className="services flex j-center a-center gap">
        {serviceData.map((service, index) => (
          <div key={index} className="service text-center column flex gap-1">
            <div className="image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="title text-center">{service.title}</div>
            <div className="description subdue  text-center">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
const Section = styled.section`
  .services {
    padding: 0.5rem;
    gap: 10rem;
    .service {
      .title {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }
`;
