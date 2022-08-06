import { ForecastList } from "../ForecastList"
import { Summary } from "../Summary"
import { InfoStyles } from "./styles"

export const InfoContainer = () => {
    return (
        <InfoStyles>
            <ForecastList/>
            <Summary/>
        </InfoStyles>
    )
}