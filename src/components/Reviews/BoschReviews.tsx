import { Badge, Space } from "antd";
import { BoschRange } from "./BoschRange";
import { BoschTotals } from "./BoschTotals";
import "./Reviews.css";

export function BoschReviews() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ border: "solid 1px #0e0e2b", width: "400px", padding: "15px", margin: "50px" }}>
        <Space>
          <h3 style={{ margin: 0 }}>Bosch</h3>{" "}
          <Badge count={"4.0 / 5"} showZero color="#0e0e2b" style={{ fontSize: "14px" }} />
        </Space>
        <br />
        <BoschTotals />
        <BoschRange />
        <span style={{ fontSize: "12px" }}>*Reliable Anti-spam Filtered Reviews</span>
      </div>
    </div>
  );
}
