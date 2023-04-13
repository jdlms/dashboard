import { BarChartOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

export function AspectButton({ displayReviews, setDisplayReviews }) {
  const handleClick = () => setDisplayReviews(!displayReviews);

  return (
    <Space>
      {!displayReviews ? (
        <Button
          style={{
            backgroundColor: "#0e0e2b",
            color: "#fffff0",
            borderColor: "#0e0e2b",
            fontWeight: "bold",
          }}
          onClick={handleClick}
        >
          View Ratings
          <LikeOutlined />
        </Button>
      ) : (
        <Button
          style={{
            backgroundColor: "#0e0e2b",
            color: "#fffff0",
            borderColor: "#0e0e2b",
            fontWeight: "bold",
          }}
          onClick={handleClick}
        >
          View Reviews
          <BarChartOutlined />
        </Button>
      )}
    </Space>
  );
}
