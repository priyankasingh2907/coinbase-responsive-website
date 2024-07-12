import styled from "styled-components";

export default function Button({ text, icon = false, subdueButton = false }) {
  return (
    <Div className="flex j-center a-center">
      {icon ? (
        <button
          className={`flex a-center j-center gap-1 ${
            subdueButton ? "subdue" : ""
          }`}
        >
          {text}
          {icon}
        </button>
      ) : (
        <button
          className={`flex a-center j-center gap-1 ${
            subdueButton ? "subdue" : ""
          }`}
        >
          {text}
        </button>
      )}
    </Div>
  );
}

const Div = styled.div`
  button {
    padding: 0.7rem 1.3rem;
    background-color: var(--blue);
    color: white;
    border: none;
    border-radius: 0%.5rem;
    font-size: 1.1rem;
    cursor: pointer;
  }
  .subdue {
    background-color: var(--subdue-button);
  }
`;
