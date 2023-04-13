import { BarChartOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

export function AspectButton({ displayReviews, setDisplayReviews }) {
  const handleClick = () => setDisplayReviews(!displayReviews);

  return (
    <Space>
      {!displayReviews ? (
        <Button onClick={handleClick}>
          View Ratings
          <LikeOutlined />
        </Button>
      ) : (
        <Button onClick={handleClick}>
          View Reviews
          <BarChartOutlined />
        </Button>
      )}
    </Space>
  );
}
