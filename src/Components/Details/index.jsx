import { DetailStyles } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { api } from "../../../services/api";

export const Details = () => {
  const [city, setCity] = useState("");

  // const handleSubmit = () => {
  //   useEffect(() => {
  //     api.get(
  //       `point?place_id=${city}&sections=current%2Cdaily&language=en&units=metric&key=${process.env.API_KEY}`
  //     );
  //   }, []);
  // };

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
          <span>Cloudy</span>
          <span className="value">70%</span>
        </div>
        <div>
          <span>Humidity</span>
          <span className="value">70%</span>
        </div>
        <div>
          <span>Wind</span>
          <span className="value">5kmph</span>
        </div>
        <div>
          <span>Rain</span>
          <span className="value">15mm</span>
        </div>
      </section>
    </DetailStyles>
  );
};
