export interface WeatherContextType {
  weatherData: any | null;
  setData: (data: WeatherData | null) => void;
}
