import { BarChartOutlined, LikeOutlined, RadarChartOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useLocation } from "react-router-dom";

interface AspectButtonProps {
  displayReviews: boolean;
  setDisplayReviews: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AspectButton({ displayReviews, setDisplayReviews }: AspectButtonProps) {
  const handleClick = () => setDisplayReviews(!displayReviews);
  const location = useLocation();
  const route = location.pathname;

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
          Click to view Reviews <LikeOutlined />
        </Button>
      ) : route !== "/benchmark" ? (
        <Button
          style={{
            backgroundColor: "#fffff0",
            color: "#0e0e2b",
            borderColor: "#0e0e2b",
            fontWeight: "bold",
          }}
          onClick={handleClick}
        >
          Click to view Ratings <BarChartOutlined />
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
          Click to view Radar <RadarChartOutlined />
        </Button>
      )}
    </Space>
  );
}
