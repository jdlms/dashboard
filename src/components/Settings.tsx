import { DashboardOutlined, EditOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import "../styles/Settings.css";

export function Settings() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "140px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Space>
        <button>
          <DashboardOutlined /> Change Dashboard
        </button>
      </Space>
      <Space>
        <button>
          <EditOutlined /> Edit subscription
        </button>
      </Space>
      <Space>
        <button>
          <LogoutOutlined /> Logout
        </button>
      </Space>
    </div>
  );
}
