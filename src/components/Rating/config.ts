import { colorMap, data } from "./data";

export const config: any = {
  data,
  xField: "type",
  yField: "score",
  label: {
    position: "middle",
    style: {
      fill: "#0e0e2b",
      // opacity: 0.6,
      fontSize: 16,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
      style: {
        fontSize: 16,
        fill: "#0e0e2b",
      },
    },
  },
  meta: {
    score: {
      alias: "score",
    },
  },
  color: (data: any) => colorMap[data.type],
};
