import { Rate, Space } from "antd";

export function BoschTotals() {
  return (
    <Space>
      <Rate disabled allowHalf defaultValue={4} />
      <span>
        <span style={{ fontWeight: "bold" }}>4029</span> Reviews
      </span>
    </Space>
  );
}
