import { createContext, useState } from "react";
import { api } from "../services/api";

import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillCloudSunFill,
  BsFillSunFill,
  BsFillCloudLightningRainFill,
  BsFillCloudSleetFill,
  BsFillCloudHailFill,
  BsSnow,
} from "react-icons/bs";

export const ForecastContext = createContext({});

export const ForecastProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [data, setData] = useState();

  const iconSwitch = (iconCode, isSummary) => {
    switch (iconCode) {
      case 2:
      case 3:
      case 26:
      case 27:
        return (
          <BsFillSunFill
            color={isSummary ? "#ffffff" : "#ffc107"}
            className="icon"
          />
        );
      case 4:
      case 5:
      case 28:
      case 29:
        return (
          <BsFillCloudSunFill
            color={isSummary ? "#ffffff" : "#f6ffa7"}
            className="icon"
          />
        );
      case 6:
      case 7:
      case 8:
      case 9:
      case 30:
      case 31:
        return (
          <BsFillCloudsFill
            color={isSummary ? "#ffffff" : "#ebfffc"}
            className="icon"
          />
        );
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
        return (
          <BsFillCloudRainFill
            color={isSummary ? "#ffffff" : "#07b0ff"}
            className="icon"
          />
        );
      case 14:
      case 15:
      case 33:
        return (
          <BsFillCloudLightningRainFill
            color={isSummary ? "#ffffff" : "#3d3c8b"}
            className="icon"
          />
        );
      case 16:
      case 17:
      case 18:
      case 19:
      case 34:
        return <BsSnow color="#ffffff" className="icon" />;
      case 20:
      case 21:
      case 22:
      case 35:
        return (
          <BsFillCloudSleetFill
            color={isSummary ? "#ffffff" : "#b3ffc4"}
            className="icon"
          />
        );
      case 23:
      case 24:
      case 25:
      case 36:
        return (
          <BsFillCloudHailFill
            color={isSummary ? "#ffffff" : "#91f0ff"}
            className="icon"
          />
        );
      default:
        break;
    }
  };

  const cityCleaned = city
    .replace(/\s/g, "-")
    .replace(/[ãáà]/g, "a")
    .replace(/[ẽéè]/g, "e")
    .replace(/[ĩíì]/g, "i")
    .replace(/[õòó]/g, "o")
    .replace(/[ũúù]/g, "u");

  const handleForecastRequest = (event) => {
    setData(undefined);
    event.preventDefault();
    api
      .get(
        `point?place_id=${cityCleaned}&sections=current%2Cdaily&language=en&units=ca&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((result) => {
        setCurrentCity(city);
        setData(result.data);
      });
  };

  return (
    <ForecastContext.Provider
      value={{ data, currentCity, setCity, handleForecastRequest, iconSwitch }}
    >
      {children}
    </ForecastContext.Provider>
  );
};
