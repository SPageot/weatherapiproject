import styled from "styled-components";
import { WeatherPropsType } from "../../types/type";

const DashboardContainer = styled("section")`
  height: 900px;
  width: 1400px;
  background-color: rgba(55, 146, 203, 0.7);
  box-shadow: 0 0 10px #97b8e0;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1400px) {
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

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const WeatherHeader = styled("h4")`
  margin: 0;
  color: #fff;
  font-size: 30px;

  @media (max-width: 520px) {
    font-size: 20px;
  }
`;

const WeatherDay = styled("h2")`
  margin: 0;
  color: #fff;
  font-size: 40px;

  @media (max-width: 520px) {
    font-size: 25px;
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

  @media (max-width: 1400px) {
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 40%;
  }
`;

const WeatherDetail = styled("p")`
  font-size: ${(props: WeatherPropsType) =>
    props.size === "large" ? "100px" : "20px"};
  color: #fff;

  @media (max-width: 800px) {
    font-size: ${(props: WeatherPropsType) =>
      props.size === "large" ? "70px" : "20px"};
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
  height: 100px;
  width: 600px;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #296d98;
  color: white;

  @media (max-width: 1400px) {
    width: 100%;
    border-radius: 0;
  }
`;

const PageSelection = styled("button")`
  height: 50px;
  width: 100px;
  border-radius: 10%;
  margin: 0 50px;
  background-color: #45b6fe;
  border: none;
  box-shadow: 0 0 5px #fff;
  cursor: pointer;
  color: #fff;
  font-weight: 900;

  :hover {
    transform: scale(1.1);
  }

  :active {
    transform: scale(0.9);
  }

  @media (max-width: 800px) {
    width: 200px;
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
