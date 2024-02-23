interface IntervalValues {
  humidity: number;
  temperature: number;
  weatherCode: number;
}
interface Interval {
  startTime: string;
  values: IntervalValues;
}
interface Timeline {
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