import { DetailStyles } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { ForecastContext } from "../../Context/ForecastContext";
import { Footer } from "../Footer";

export const Details = () => {
  const { setCity, data, handleForecastRequest } = useContext(ForecastContext);

  return (
    <DetailStyles>
      <form onSubmit={handleForecastRequest}>
        <input
          type="text"
          placeholder="Search for a city"
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
          {data ? <span className="value">{data.current.summary}</span> : ""}
        </div>
        <div>
          <span>Temperature</span>
          {data ? <span className="value">{data.current.temperature + "°C"}</span> : ""}
        </div>
        <div>
          <span>Cloudy</span>
          {data ? <span className="value">{data.current.cloud_cover + "%"}</span> : ""}
        </div>
        <div>
          <span>Winds</span>
          {data ? <span className="value">{data.current.wind.speed + "kph"}</span> : ""}
        </div>
        <div>
          <span>Rain</span>
          {data ? (
            <span className="value">{data.current.precipitation.total + "mm"}</span>
          ) : (
            ""
          )}
        </div>
      </section>
      <Footer/>
    </DetailStyles>
  );
};
