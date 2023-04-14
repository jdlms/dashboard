import { Rate, Space } from "antd";

export function WeberTotals() {
  return (
    <Space>
      <Rate disabled allowHalf defaultValue={4.5} />
      <span>
        <span style={{ fontWeight: "bold" }}>5480</span> Reviews
      </span>
    </Space>
  );
}
