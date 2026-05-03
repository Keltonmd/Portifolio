import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { contactLinks } from "../data/siteContent";
import "../styles/Footer.scss";

function Footer() {
  const renderIcon = (kind: string) => {
    if (kind === "github") {
      return <GitHubIcon />;
    }

    if (kind === "linkedin") {
      return <LinkedInIcon />;
    }

    return <MailOutlineRoundedIcon />;
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__eyebrow">Kelton Martins</p>
          <p className="site-footer__description">
            Backend, infraestrutura e interfaces funcionais.
          </p>
        </div>

        <div className="site-footer__links" aria-label="Links de contato">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
            >
              {renderIcon(link.kind)}
            </a>
          ))}
        </div>

        <p className="site-footer__meta">© {new Date().getFullYear()} Kelton Martins</p>
      </div>
    </footer>
  );
}

export default Footer;
