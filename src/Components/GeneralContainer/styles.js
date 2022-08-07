import styled from "styled-components";

export const GeneralContainerStyles = styled.main`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-size: cover;
  
  position: absolute;
  left: 50%;
  top: 50%;
  box-shadow: 0px 39px 80px 13px #000000;
  transform: translate(-50%, -50%);
  
  width: 100%;
  height: 85%;
  max-width: 1100px;
  
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1.8fr 1fr;
  
  @media (max-width: 800px) {
    background-position: left;
    height: 100%;
    grid-template-columns: 1fr;
  }
`;
