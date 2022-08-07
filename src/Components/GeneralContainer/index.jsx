import { useContext } from "react";
import { ForecastContext } from "../../Context/ForecastContext";
import { Details } from "../Details";
import { InfoContainer } from "../InfoContainer";
import { GeneralContainerStyles } from "./styles";

import clouds from "../../assets/cloudy_bg.jpg";
import rain from "../../assets/rain_bg.jpg";
import snow from "../../assets/snow_bg.jpg";
import sunny from "../../assets/sunny_bg.jpg";

export const GeneralContainer = () => {
  const { data } = useContext(ForecastContext);

  const bgSwitch = (iconCode) => {
    switch (iconCode) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 26:
      case 27:
      case 28:
      case 29:
        return sunny;
      case 6:
      case 7:
      case 8:
      case 9:
      case 30:
      case 31:
        return clouds;
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 32:
      case 33:
        return rain;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 34:
      case 35:
      case 36:
        return snow;
      default:
        break;
    }
  };

  return (
    <GeneralContainerStyles bgImage={data ? bgSwitch(data.current.icon_num) : ""}>
      <InfoContainer />
      <Details />
    </GeneralContainerStyles>
  );
};
