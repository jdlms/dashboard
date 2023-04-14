import { Radar } from "@ant-design/plots";
import { config } from "./config";

export function RadarChart() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Radar {...config} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
