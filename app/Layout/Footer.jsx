import React from "react";
import { Button } from "antd";
import { MailOutlined, ReadOutlined } from "@ant-design/icons";
export const Footer = () => {
  return (
    <footer>
      <Button
        href="https://auvergnerhonealpes.simplon.co/candidatures.html"
        target="_blank"
        className="footer-btn"
        icon={<ReadOutlined style={{ color: "#ce0033" }} />}
        style={{ marginLeft: "5rem" }}
      >
        Nos offres de formation
      </Button>
      <a
        href="https://littlebig-asso.fr"
        style={{ fontSize: "1.2rem", margin: 0 }}
        target="_blank"
        className="liens"
      >
        {"Made with <3 by Little Big"}
      </a>
      <Button
        href="www.google.fr"
        target="_blank"
        className="footer-btn"
        icon={<MailOutlined style={{ color: "#ce0033" }} />}
        style={{ marginRight: "5rem" }}
      >
        Nous contacter
      </Button>
    </footer>
  );
};
