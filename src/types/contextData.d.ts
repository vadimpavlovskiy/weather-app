export interface WeatherContextType {
  weatherData: any | null;
  cityCoord: { lat: number; lon: number } | null;
  setData: (data: WeatherData | null) => void;
  setCoord: (lat: number, lon: number) => void;
}
