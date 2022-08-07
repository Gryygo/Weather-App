// import { Details } from "./Components/Details";
import { GeneralContainer } from "./Components/GeneralContainer";
import { ForecastProvider } from "./Context/ForecastContext";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <ForecastProvider>
      <GeneralContainer />
      <GlobalStyle />
    </ForecastProvider>
  );
};

export default App;
