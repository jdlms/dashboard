import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

type DropMenuItem = {
  title: string;
  placeholder: string;
  selection: string[];
}

type DropMenusProps = {
  item: DropMenuItem;
}

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
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontWeight: 600, fontSize: "1rem" }}>{item.title}</span>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <span style={{ fontSize: "smaller" }}>{item.placeholder}</span>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
