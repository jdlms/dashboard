import { Badge, Rate, Space } from "antd";

export function Totals() {
  return (
    <Space>
      <Badge count={"4.5 / 5"} showZero color="#0e0e2b" style={{ fontSize: "15px" }} />
      <Rate disabled allowHalf defaultValue={4.5} />
      <span>
        <span style={{ fontWeight: "bold" }}>5480</span> Reviews
      </span>
    </Space>
  );
}
