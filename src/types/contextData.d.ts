export interface WeatherContextType {
  weatherData: any | null;
  activeCity: string | null;
  cityCoord: { lat: number; lon: number } | null;
  setCity: (
    name?: string | null,
    state?: string | null,
    country?: string | null
  ) => void;
  setData: (data: WeatherData | null) => void;
  setCoord: (lat: number, lon: number) => void;
}
