import { useState } from "react";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export const Burger = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      selectedKeys={[current]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MenuOutlined />}>
        <Menu.Item key="formations">
          <a
            href="https://auvergnerhonealpes.simplon.co/candidatures.html"
            target="_blank"
          >
            Nos offres de formations
          </a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a
            href="https://www.google.com/intl/en-GB/forms/about/"
            target="_blank"
          >
            Nous contacter
          </a>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
