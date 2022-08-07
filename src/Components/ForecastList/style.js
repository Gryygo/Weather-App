import styled from "styled-components";

export const ForecastListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 105px);
  grid-template-rows: 1fr;
  gap: 20px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;

  /* @media (max-width: 800px) {
    height: 100%;
    grid-template-columns: 1fr;
  } */
`;
