import { ForecastBlock } from "./ForecastBlock";
import { ForecastListStyles } from "./style";

export const ForecastList = () => {
  const forecasts = [
    {
      id: 1,
      day: "monday",
      weather: "rainy",
      min: "20°",
      max: "26°",
    },
    {
      id: 2,
      day: "thursday",
      weather: "sunny",
      min: "26°",
      max: "32°",
    },
    {
      id: 3,
      day: "wednesday",
      weather: "clouds",
      min: "25°",
      max: "29°",
    },
    {
      id: 4,
      day: "tuesday",
      weather: "snowy",
      min: "11°",
      max: "18°",
    },
  ];

  const createBlock = (id, day, weather, min, max) => {
    return (
      <ForecastBlock
        key={id}
        day={day}
        weather={weather}
        min={min}
        max={max}
        // delay={id * 150}
      />
    );
  };

  return (
    <ForecastListStyles>
      {forecasts.map((forecast) => {
        return (
          <ForecastBlock
            key={forecast.id}
            day={forecast.day}
            weather={forecast.weather}
            min={forecast.min}
            max={forecast.max}
            delay={forecast.id * 150}
          />
        );
      })}
    </ForecastListStyles>
  );
};
