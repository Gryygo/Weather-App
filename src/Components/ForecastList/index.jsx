import { useContext } from "react";
import { ForecastContext } from "../../Context/ForecastContext";
import { ForecastBlock } from "./ForecastBlock";
import { ForecastListStyles } from "./style";

export const ForecastList = () => {
  const { data } = useContext(ForecastContext);
  const forecasts = [];
  let delay = 0;

  if (data) {
    for (let index = 1; index < 5; index++) {
      let forecast = data.daily.data[index];
      delay += 100;
      forecasts.push({ forecast: forecast, delay: delay });
    }
  }

  return (
    <ForecastListStyles>
      {data
        ? forecasts.map((forecast) => {
            return (
              <ForecastBlock
                key={forecast.forecast.day}
                day={forecast.forecast.day}
                weather={forecast.forecast.all_day.icon}
                min={forecast.forecast.all_day.temperature_min}
                max={forecast.forecast.all_day.temperature_max}
                delay={forecast.delay}
              />
            );
          })
        : ""}
    </ForecastListStyles>
  );
};
