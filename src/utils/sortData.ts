import { Timeline } from "@/types/data";

export function sortDate(weatherData: Timeline) {
  const groupedData = weatherData.intervals.reduce((acc: any, obj: any) => {
    const startDay = obj.startTime.split("T")[0];
    if (!acc[startDay]) {
      acc[startDay] = [];
    }
    acc[startDay].push(obj);

    return acc;
  }, {});

  const result = Object.keys(groupedData).map((day) => ({
    day,
    data: groupedData[day],
  }));
  return result;
}
