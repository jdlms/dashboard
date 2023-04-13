import { Column } from "@ant-design/plots";
import { config } from "./config";
import "./Rating.css";

export function Rating() {
  return (
    <div className="chart-wrapper">
      <Column {...config} />
    </div>
  );
}
