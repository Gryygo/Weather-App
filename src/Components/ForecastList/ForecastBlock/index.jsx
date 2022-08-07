import { ForecastBlkStyles } from "./styles"
import { useContext } from "react";
import { ForecastContext } from "../../../Context/ForecastContext";

export const ForecastBlock = ({ day, weather, min, max, delay }) => {
 const {iconSwitch} =  useContext(ForecastContext)

  let splitDay = day.split("-")
  let date = `${splitDay[2]}/${splitDay[1]}`

  return (
    <ForecastBlkStyles delay={delay}>
      <p>{date}</p>
      {iconSwitch(weather, false)}
      <p>
        <span>{min}°</span> | <span>{max}°</span>
      </p>
    </ForecastBlkStyles>
  );
};
