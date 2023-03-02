import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherDataType } from "../types/type";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weather.gov/",
  }),
  endpoints: (builder) => ({
    getWeatherForecast: builder.query<WeatherDataType, void>({
      query: () => "gridpoints/AKQ/44,83/forecast",
    }),
  }),
});

export const { useGetWeatherForecastQuery } = weatherApi;
