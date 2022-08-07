import styled from "styled-components";

export const ForecastBlkStyles = styled.div`
  position: relative;
  text-align: center;
  width: 105px;
  padding: 5px 0;
  border-radius: 15px;
  color: #fff;
  background-color: rgba(17, 17, 17, 0.5);
  backdrop-filter: blur(5px);
  animation: arrive .4s ease-out ${props => props.delay}ms forwards;
  /* animation-delay: ${props => props.delay}ms ; */
  opacity: 0;
  @keyframes arrive {
    from {
      top: 40px;
    }
    to {
      opacity: 1;
      top: 0;
    }
  }

  p {
    font-size: 0.9rem;
    text-transform: capitalize;
  }
  .icon {
    font-size: 3.5rem;
    margin: 5px 0;
  }
`;