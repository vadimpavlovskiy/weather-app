export interface WeatherData {
  day: string;
  data: {
    startTime: string;
    values: {
      humidity: number;
      temperature: number;
      weatherCode: number;
      windSpeed: number;
    };
  }[];
}
export interface IData {
  startTime: string;
  values: {
    humidity: number;
    temperature: number;
    weatherCode: number;
    windSpeed: number;
  };
}
