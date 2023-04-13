import { Button, Space } from "antd";
import "../styles/Menu.css";
import {
  HeatMapOutlined,
  RiseOutlined,
  ShareAltOutlined,
  SyncOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "270px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Space>
        <Link to="/">
          <button className="custom-button">
            <RiseOutlined /> Aspect Scores
          </button>
        </Link>
      </Space>
      <Space>
        <Link to="/benchmark">
          <button className="custom-button">
            <ThunderboltOutlined /> Benchmark
          </button>
        </Link>
      </Space>
      <Space>
        <button className="custom-button">
          <SyncOutlined /> Time series
        </button>
      </Space>
      <Space>
        <button className="custom-button">
          <ShareAltOutlined /> Driver analysis
        </button>
      </Space>
      <Space>
        <button className="custom-button">
          <HeatMapOutlined /> Aspect detail
        </button>
      </Space>
    </div>
  );
}
