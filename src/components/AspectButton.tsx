import { BarChartOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

interface AspectButtonProps {
  displayReviews: boolean;
  setDisplayReviews: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AspectButton({ displayReviews, setDisplayReviews }: AspectButtonProps) {
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
          Click to view reviews <LikeOutlined />
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
          Click to view ratings <BarChartOutlined />
        </Button>
      )}
    </Space>
  );
}
