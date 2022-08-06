import styled from "styled-components";

export const DetailStyles = styled.section`
  background-color: rgba(17, 17, 17, 0.4);
  color: #ffffff;
  backdrop-filter: blur(16px);
  height: 100%;
  /* width: 400px; */
  padding: 0.8rem 2rem;

  form {
    display: grid;
    width: 0%;
    margin-top: 2rem;
    grid-template-columns: 8fr 2fr;
    border-bottom: 1px solid #cbcbcb;
    animation: grow 0.5s ease-out forwards;
    animation-delay: 1s;
    opacity: 0;
    @keyframes grow {
      from {
        width: 0;
      }
      to {
        opacity: 1;
        width: 100%;
      }
    }

    input {
      font-size: 1rem;
      background: transparent;
      border: none;
      color: #ffffff;
      outline: none;
    }
    button {
      font-size: 1.5rem;
      color: #cbcbcb;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: #ffffff;
      }
    }
  }

  section {
    margin-top: 6rem;
    border-bottom: 1px solid #cbcbcb;
    animation: grow 0.5s ease-out forwards;
    animation-delay: 1s;
    opacity: 0;

    h2 {
      font-size: 2.2rem;
    }
    div {
      margin: 1rem 0;
      color: #cbcbcb;
      display: flex;
      justify-content: space-between;

      .value {
        color: #ffffff;
        animation: arrive 0.2s ease-out forwards;
        opacity: 0;
        position: relative;
        @keyframes arrive {
          from {
            top: 10px;
          }
          to {
            opacity: 1;
            top: 0;
          }
        }
      }
    }
  }
`;
