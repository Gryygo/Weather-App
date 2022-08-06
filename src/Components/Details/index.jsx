import { DetailStyles } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { api } from "../../services/api";
// import dotenv

const aReplace = /[ãáà]/g;
const eReplace = /[ẽéè]/g;
const iReplace = /[ĩíì]/g;
const oReplace = /[õòó]/g;
const uReplace = /[ũúù]/g;
const spaceReplace = /\s/g;

export const Details = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  
  const cityCleaned = city
  .replace(spaceReplace, "-")
  .replace(aReplace, "a")
  .replace(eReplace, "e")
  .replace(iReplace, "i")
  .replace(oReplace, "o")
  .replace(uReplace, "u");
  
  const handleSubmit = (event) => {
    setData(undefined);
    event.preventDefault();
    api
      .get(
        `point?place_id=${cityCleaned}&sections=current%2Cdaily&language=en&units=metric&key=${process.env.REACT_APP_API_KEY}`
        // `point?place_id=${cityCleaned}&sections=current%2Cdaily&language=en&units=metric&key=w5n5prr7phj24om07lbrsbzaih2qvgcgyxymvwqv`
      )
      .then((result) => {
        setCity("");
        setData(result.data.current);
      });
  };

  return (
    <DetailStyles>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a location"
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
      <section>
        <h2>Details</h2>
        <div>
          <span>Status</span>
          {data ? <span className="value">{data.summary}</span> : ""}
        </div>
        <div>
          <span>Temperature</span>
          {data ? <span className="value">{data.temperature + "°C"}</span> : ""}
        </div>
        <div>
          <span>Cloudy</span>
          {data ? <span className="value">{data.cloud_cover + "%"}</span> : ""}
        </div>
        <div>
          <span>Winds</span>
          {data ? <span className="value">{data.wind.speed + "kph"}</span> : ""}
        </div>
        <div>
          <span>Rain</span>
          {data ? (
            <span className="value">{data.precipitation.total + "mm"}</span>
          ) : (
            ""
          )}
        </div>
      </section>
    </DetailStyles>
  );
};
