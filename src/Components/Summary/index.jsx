import { SummaryStyles } from "./styles";
// import {
//   BsFillCloudRainFill,
//   BsFillCloudsFill,
//   BsFillCloudSunFill,
//   BsFillSunFill,
//   BsFillCloudHailFill,
//   BsSnow,
// } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ForecastContext } from "../../Context/ForecastContext";

let dateInit = new Date();
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "Jan",
  "Fev",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const year = dateInit.getFullYear() - 2000;

export const Summary = () => {
  const [hours, setHours] = useState(dateInit.getHours());
  const [minutes, setMinutes] = useState(dateInit.getMinutes());
  const { data, currentCity, iconSwitch } = useContext(ForecastContext);

  useEffect(() => {
    setInterval(() => {
      let dateNow = new Date();

      setHours(dateNow.getHours());
      setMinutes(dateNow.getMinutes());
    }, 60000);
  }, []);

  return data ? (
    <SummaryStyles>
      <h2 className="temperature">{data ? Math.ceil(data.current.temperature) + "°" : ""}</h2>
      <div>
        <p className="city">{currentCity}</p>
        <p className="date">
          {hours}:{minutes < 10 ? "0" + minutes : minutes} |{" "}
          {week[dateInit.getDay()]} | {dateInit.getDate()}{" "}
          {month[dateInit.getMonth()]} {year}
        </p>
      </div>
      {iconSwitch(data.current.icon_num, true)}
      {/* <BsFillCloudsFill className="icon" /> */}
    </SummaryStyles>
  ) : (
    ""
  );
};
