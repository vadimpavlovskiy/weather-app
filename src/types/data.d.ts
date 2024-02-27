interface IntervalValues {
  humidity: number;
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  sunriseTime: string;
  sunsetTime: string;
  windDirection: number;
}
export interface IntervalData {
  day: string;
  data: Interval[];
}

export interface Interval {
  startTime: string;
  values: IntervalValues;
}
export interface Timeline {
  timestep: string;
  endTime: string;
  startTime: string;
  intervals: Interval[];
}
interface Data {
  timelines: Timeline[];
}
export interface APIResponse {
  data: Data;
}
