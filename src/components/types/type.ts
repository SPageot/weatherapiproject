interface WeatherDataInfoType {
  detailedForecast: string;
  shortForecast: string;
  name: string;
  temperature: number;
  temperatureUnit: string;
  windDirection: string;
  windSpeed: string;
  startTime: string;
  endTime: string;
}

export interface WeatherPropsType {
  size: string;
}

export interface WeatherDataType {
  data: object;
  properties: {
    periods: WeatherDataInfoType[];
  };
}
