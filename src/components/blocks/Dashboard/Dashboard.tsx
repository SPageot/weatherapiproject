import { useState } from "react";
import { useGetWeatherForecastQuery } from "../../../features/weatherSlice";
import ReactLoading from "react-loading";
import { convertToStandardTime } from "../../../util/helperFunctions";
import {
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
} from "./dashboardStyles";

const Dashboard = () => {
  const { data, isLoading, isFetching } = useGetWeatherForecastQuery(
    undefined,
    {
      pollingInterval: 600000,
    }
  );
  const [page, setPage] = useState<number>(2);
  const forcastForEachDay = data?.properties?.periods[page];

  const handleNextPageClick = (): void => {
    if (data) {
      if (page < data?.properties?.periods.length - 1) {
        setPage((prev) => prev + 1);
      }
    }
  };

  const handlePrevPageClick = (): void => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <DashboardContainer>
      {isLoading || isFetching ? (
        <LoadingContainer>
          <ReactLoading type="spin" color="navy" height={50} width={50} />
        </LoadingContainer>
      ) : (
        <>
          <PageSelection onClick={handlePrevPageClick}>Prev Date</PageSelection>
          {forcastForEachDay && !isLoading ? (
            <DashboardInnerContainer>
              <WeatherHeaderContainer>
                <WeatherDay>{forcastForEachDay?.name}</WeatherDay>
                <WeatherHeader>
                  {forcastForEachDay?.shortForecast}
                </WeatherHeader>
              </WeatherHeaderContainer>
              <WeatherDetail size="large">{`${forcastForEachDay?.temperature}°${forcastForEachDay?.temperatureUnit}`}</WeatherDetail>
              <WeatherDetails>
                <WeatherSectionContainer>
                  <WeatherDetail size="">{`${forcastForEachDay?.startTime.slice(
                    0,
                    10
                  )}`}</WeatherDetail>
                  <WeatherDetail size="">{` ${convertToStandardTime(
                    forcastForEachDay?.startTime.slice(11, 16)
                  )} - ${convertToStandardTime(
                    forcastForEachDay?.startTime.slice(20, 25)
                  )}`}</WeatherDetail>
                </WeatherSectionContainer>
                <WeatherSectionContainer>
                  <WeatherDetail size="">Wind Speed</WeatherDetail>
                  <WeatherDetail size="">{`${forcastForEachDay?.windDirection} ${forcastForEachDay?.windSpeed}`}</WeatherDetail>
                </WeatherSectionContainer>
                <WeatherSectionContainer>
                  <WeatherDetail size="">{`${forcastForEachDay?.endTime.slice(
                    0,
                    10
                  )}`}</WeatherDetail>
                  <WeatherDetail size="">{` ${convertToStandardTime(
                    forcastForEachDay?.endTime.slice(11, 16)
                  )} - ${convertToStandardTime(
                    forcastForEachDay?.endTime.slice(20, 25)
                  )}`}</WeatherDetail>
                </WeatherSectionContainer>
              </WeatherDetails>
              <WeatherDescription>
                {forcastForEachDay?.detailedForecast}
              </WeatherDescription>
            </DashboardInnerContainer>
          ) : null}
          <PageSelection onClick={handleNextPageClick}>Next Date</PageSelection>
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
