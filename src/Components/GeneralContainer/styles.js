import styled from "styled-components";
import clouds from "../../assets/cloudy_bg.jpg";
import rain from "../../assets/rain_bg.jpg";
import snow from "../../assets/snow_bg.jpg";
import sunny from "../../assets/sunny_bg.jpg";

const bgImage = rain;

export const GeneralContainerStyles = styled.main`
  background: url(${bgImage});
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
`;
