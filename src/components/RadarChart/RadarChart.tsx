import { Radar } from "@ant-design/plots";

import { config } from "./config";

export function RadarChart() {
  return <Radar {...config} />;
}
