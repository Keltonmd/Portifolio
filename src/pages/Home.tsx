import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { FadeIn } from "../components";
import avatar from "../assets/avatar_circular.png";
import { contactLinks, heroMetrics } from "../data/siteContent";
import "../styles/Home.scss";

function Home() {
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
    <section id="home" className="hero-section section" aria-label="Apresentação">
      <div className="section__inner">
        <div className="hero-grid">
          <FadeIn className="hero-copy" duration={460}>
            <p className="eyebrow">Desenvolvedor Full Stack</p>
            <h1>Kelton Martins</h1>
            <p className="hero-copy__lead">
              Foco em backend e infraestrutura, do código ao deploy em produção.
            </p>

            <div className="button-row hero-copy__actions">
              <a className="button button--primary" href="#projects">
                Ver projetos
              </a>
              <a className="button button--secondary" href="#contact">
                Contato
              </a>
            </div>

            <div className="social-links" aria-label="Links principais">
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

            <div className="hero-metrics" aria-label="Resumo de atuação">
              {heroMetrics.map((metric) => (
                <FadeIn
                  key={metric.label}
                  className="hero-metric card"
                  duration={420}
                >
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="hero-panel card hero-panel--featured" delay={120} duration={460}>
            <div className="hero-panel__identity">
              <img src={avatar} alt="Retrato de Kelton Martins" />
              <div>
                <p className="hero-panel__name">Kelton Martins</p>
                <p className="hero-panel__role">
                  Backend · DevOps · Full Stack
                </p>
              </div>
            </div>

            <div className="hero-panel__group">
              <p className="eyebrow">Foco</p>
              <ul className="clean-list">
                <li>APIs REST e sistemas corporativos.</li>
                <li>Deploy e infraestrutura em produção.</li>
                <li>IA aplicada e integração de serviços.</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Home;
