import { useContext } from "react";
import { ForecastContext } from "../../Context/ForecastContext";
import { ForecastBlock } from "./ForecastBlock";
import { ForecastListStyles } from "./style";

export const ForecastList = () => {
  const { data } = useContext(ForecastContext);
  const forecasts = [];

  if (data) {
    for (let index = 0; index < 4; index++) {
      let forecast = data.daily.data[index];
      forecasts.push(forecast);
    }
  }

  return (
    <ForecastListStyles>
      {data
        ? forecasts.map((forecast) => {
            return (
              <ForecastBlock
                key={forecast.day}
                day={forecast.day}
                weather={forecast.all_day.icon}
                min={forecast.all_day.temperature_min}
                max={forecast.all_day.temperature_max}
              />
            );
          })
        : ""}
    </ForecastListStyles>
  );
};
