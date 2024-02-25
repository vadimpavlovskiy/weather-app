interface IntervalValues {
  humidity: number;
  temperature: number;
  weatherCode: number;
  windSpeed: number;
}
export interface IntervalData {
  day: string;
  data: Interval[];
}

export interface Interval {
  startTime: string;
  values: {
    humidity: number;
    temperature: number;
    weatherCode: number;
    windSpeed: number;
  };
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
