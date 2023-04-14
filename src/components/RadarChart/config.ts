import { data } from "./data";

export const config = {
  data,
  xField: "item",
  yField: "score",
  seriesField: "user",
  meta: {
    score: {
      min: 0,
      max: 80,
    },
  },
  xAxis: {
    line: null,
    tickLine: null,
    grid: {
      line: {
        style: {
          lineDash: null,
        },
      },
    },
  },
  yAxis: {
    line: null,
    tickLine: null,
    grid: {
      line: {
        type: "line",
        style: {
          lineDash: null,
        },
      },
      alternateColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  area: {},
  point: {
    size: 2,
  },
};
