import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://github.com/keltonmd"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/keltonmd"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} — Desenvolvido por{" "}
        <span className="footer-name">Kelton Martins</span>
      </p>

      <p className="footer-template">
        Baseado em um template adaptado com excelência e código próprio.
      </p>
    </footer>
  );
}

export default Footer;
