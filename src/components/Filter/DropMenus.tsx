import { CaretLeftOutlined, CaretRightOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useLocation } from "react-router-dom";

type DropMenuItem = {
  title: string;
  placeholder: string;
  selection: string[];
};

type DropMenusProps = {
  item: DropMenuItem;
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <span>Option 1</span>,
  },
  {
    key: "2",
    label: <span>Option 2</span>,
  },
  {
    key: "2",
    label: <span>Option 3</span>,
  },
];

export function DropMenus({ item }: DropMenusProps) {
  const location = useLocation();
  const route = location.pathname;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Space>
        {item.placeholder === "Weber" && route === "/benchmark" ? (
          <CaretLeftOutlined style={{ fontSize: "18px", color: "#0e0e2b" }} />
        ) : null}
        <span style={{ fontWeight: 600, fontSize: "12px", marginBottom: "5px", color: "#0e0e2b" }}>
          {item.title}
        </span>
        {item.placeholder === "Bosch" ? (
          <CaretRightOutlined style={{ fontSize: "18px", color: "#0e0e2b" }} />
        ) : null}
      </Space>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <span style={{ fontSize: "12px", color: "#0e0e2b" }}>{item.placeholder}</span>
            <DownOutlined style={{ fontSize: "9px", color: "#0e0e2b" }} />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
