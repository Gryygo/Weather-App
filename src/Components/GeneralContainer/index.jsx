import { Details } from "../Details";
import { InfoContainer } from "../InfoContainer";
import { GeneralContainerStyles } from "./styles";

export const GeneralContainer = () => {
  return (
    <GeneralContainerStyles>
      <InfoContainer />
      <Details />
    </GeneralContainerStyles>
  );
};
