import styled from "styled-components";
import { WeatherPropsType } from "../../types/type";

const DashboardContainer = styled("section")`
  height: 56.25rem;
  width: 87.5rem;
  background-color: rgba(55, 146, 203, 0.7);
  box-shadow: 0 0 0.625rem #97b8e0;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 87.5rem) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const DashboardInnerContainer = styled("section")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WeatherHeaderContainer = styled("div")`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 31.25rem) {
    text-align: center;
  }
`;

const WeatherHeader = styled("h4")`
  margin: 0;
  color: #fff;
  font-size: 1.875rem;

  @media (max-width: 32.5rem) {
    font-size: 1.25rem;
  }
`;

const WeatherDay = styled("h2")`
  margin: 0;
  color: #fff;
  font-size: 2.5rem;

  @media (max-width: 32.5rem) {
    font-size: 1.5625rem;
  }
`;

const WeatherDetails = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 20%;
  width: 100%;
  display: flex;
  color: #fff;

  @media (max-width: 87.5rem) {
    justify-content: space-between;
  }

  @media (max-width: 50rem) {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 40%;
  }
`;

const WeatherDetail = styled("p")`
  font-size: ${(props: WeatherPropsType) =>
    props.size === "large" ? "6.25rem" : "1.25rem"};
  color: #fff;

  @media (max-width: 800px) {
    font-size: ${(props: WeatherPropsType) =>
      props.size === "large" ? "4.375rem" : "1.25rem"};
  }
`;

const LoadingContainer = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherSectionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WeatherDescription = styled("p")`
  height: 6.25rem;
  width: 37.5rem;
  padding: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #296d98;
  color: white;

  @media (max-width: 87.5rem) {
    width: 100%;
    border-radius: 0;
  }
`;

const PageSelection = styled("button")`
  height: 3.125rem;
  width: 6.25rem;
  border-radius: 10%;
  margin: 0 3.125rem;
  background-color: #45b6fe;
  border: none;
  box-shadow: 0 0 0.3125rem #fff;
  cursor: pointer;
  color: #fff;
  font-weight: 900;

  :hover {
    transform: scale(1.1);
  }

  :active {
    transform: scale(0.9);
  }

  @media (max-width: 50rem) {
    width: 12.5rem;
    border-radius: 0;
    margin: 0;
  }
`;

export {
  DashboardContainer,
  DashboardInnerContainer,
  WeatherDay,
  WeatherDescription,
  WeatherDetail,
  WeatherDetails,
  WeatherHeader,
  WeatherHeaderContainer,
  WeatherSectionContainer,
  PageSelection,
  LoadingContainer,
};
