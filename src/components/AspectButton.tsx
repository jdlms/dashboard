import { BarChartOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

export function AspectButton({ displayReviews, setDisplayReviews }) {
  const handleClick = () => setDisplayReviews(!displayReviews);

  return (
    <Space>
      {!displayReviews ? (
        <Button
          style={{
            backgroundColor: "#fffff0",
            color: "#0e0e2b",
            borderColor: "#0e0e2b",
            fontWeight: "bold",
          }}
          onClick={handleClick}
        >
          Click to view ratings <LikeOutlined />
        </Button>
      ) : (
        <Button
          style={{
            backgroundColor: "#fffff0",
            color: "#0e0e2b",
            borderColor: "#0e0e2b",
            fontWeight: "bold",
          }}
          onClick={handleClick}
        >
          View Reviews <BarChartOutlined />
        </Button>
      )}
    </Space>
  );
}
