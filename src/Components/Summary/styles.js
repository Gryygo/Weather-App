import styled from "styled-components";

const animationStagger = (delay) => {
  return `
          position: relative;
          opacity: 0;
          animation: sum_arrive .3s ease-out forwards;
          animation-delay: ${delay}ms;`
} 

export const SummaryStyles = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;
  max-width: 450px;
  color: #fff;

  .temperature {
    font-size: 5rem;
    font-weight: 700;
    line-height: 80%;
    ${animationStagger(100)}
  }

  div {
    display: flex;
    padding-left: 0.5rem;
    flex-direction: column;
    font-weight: 700;
    bottom: 0;
    .city {
      line-height: 90%;
      font-size: 2.3rem;
      text-transform: capitalize;
      ${animationStagger(300)}

    }
    .date {
      font-size: 0.8rem;
      ${animationStagger(500)}

    }
  }


  .icon {
    font-size: 3rem;
    margin-left: 0.5rem;
    ${animationStagger(700)}

  }

  @keyframes sum_arrive {
    from {
      top: 20px;
    }
    to {
      opacity: 1;
      top: 0;
    }
  }
`;
