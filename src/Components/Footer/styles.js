import styled from "styled-components";

export const FooterStyles = styled.div`
  /* margin-top: 5rem; */
  text-align: center;
  animation: arriveFooter .4s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
  @keyframes arriveFooter {
    from {
      margin-top: 20px;
    }
    to {
      margin-top: 5rem;
      opacity: 1;
    }
  }
  .icon {
    color: #ffffff;
    font-size: 24px;
    margin: 0 15px;
  }

  @media (max-width: 800px) {
    margin-top: 4rem;
  }
`;
