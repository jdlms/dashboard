import "./Reviews.css";
import { WeberTotals } from "./WeberTotals";
import { WeberRange } from "./WeberRange";
import { Badge, Space } from "antd";

export function WeberReviews() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ border: "solid 1px #0e0e2b", width: "400px", padding: "15px", margin: "50px" }}>
        <Space>
          <h3 style={{ margin: 0 }}>Weber</h3>{" "}
          <Badge count={"4.5 / 5"} showZero color="#0e0e2b" style={{ fontSize: "14px" }} />
        </Space>
        <br />
        <WeberTotals />
        <WeberRange />
        <span style={{ fontSize: "12px" }}>*Reliable Anti-spam Filtered Reviews</span>
      </div>
    </div>
  );
}
