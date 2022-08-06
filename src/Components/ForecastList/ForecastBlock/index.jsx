import { ForecastBlkStyles } from "./styles"
import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillSunFill,
  BsFillCloudHailFill,
  BsSnow,
  BsWind,
} from "react-icons/bs";

export const ForecastBlock = ({ day, weather, min, max, delay }) => {

  const weatherHandler = (type) => {
    switch (type) {
      case "sunny":
        return <BsFillSunFill color="#ffc107" className="icon sun" />;
      case "rainy":
        return <BsFillCloudRainFill color="#07b0ff" className="icon rain" />;
      case "clouds":
        return <BsFillCloudsFill color="#ebfffc" className="icon cloud" />;
      case "snowy":
        return <BsSnow color="#ffffff" className="icon snow" />;
      case "hail":
        return <BsFillCloudHailFill color="#91f0ff" className="icon hail" />;
      case "windy":
        return <BsWind color="#b3ffc4" className="icon wind" />;
      default:
        return "8=======D";
    }
  };

  return (
    <ForecastBlkStyles>
      <p>{day}</p>
      {weatherHandler(weather)}
      <p>
        <span>{min}</span> | <span>{max}</span>
      </p>
    </ForecastBlkStyles>
  );
};
