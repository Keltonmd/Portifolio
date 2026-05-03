import type { ReactElement } from "react";
import { FadeIn } from "../components";
import { capabilityGroups, professionalSummary } from "../data/siteContent";
import "../styles/Skills.scss";

import {
  SiOpenjdk, SiSpringboot, SiPhp, SiSymfony, SiPython, SiFlask, SiNodedotjs,
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiBootstrap,
  SiPostgresql, SiMysql, SiMongodb,
  SiDocker, SiNginx, SiLinux, SiGithubactions,
  SiTensorflow, SiOpencv, SiPandas, SiOpenai, SiJunit5,
} from "react-icons/si";
import {
  FiServer, FiMonitor, FiDatabase, FiCloud, FiShield, FiCpu, FiCheckSquare,
} from "react-icons/fi";

// ── Ícones por nome de tecnologia ─────────────────────────────────────────
const techIcons: Record<string, ReactElement> = {
  // Backend
  "Java":        <SiOpenjdk />,
  "Spring Boot": <SiSpringboot />,
  "PHP":         <SiPhp />,
  "Symfony":     <SiSymfony />,
  "Python":      <SiPython />,
  "Flask":       <SiFlask />,
  "Node.js":     <SiNodedotjs />,
  // Frontend
  "React":              <SiReact />,
  "TypeScript":         <SiTypescript />,
  "JavaScript (ES6+)":  <SiJavascript />,
  "HTML5":              <SiHtml5 />,
  "CSS3 / SCSS":        <SiCss />,
  "Bootstrap":          <SiBootstrap />,
  // Banco de Dados
  "PostgreSQL": <SiPostgresql />,
  "MySQL":      <SiMysql />,
  "MongoDB":    <SiMongodb />,
  // DevOps & Cloud
  "Docker":           <SiDocker />,
  "Docker Compose":   <SiDocker />,
  "AWS (EC2, S3, RDS)": <FiCloud />,
  "NGINX":            <SiNginx />,
  "Linux":            <SiLinux />,
  "GitHub Actions":   <SiGithubactions />,
  // IA & Dados
  "TensorFlow":        <SiTensorflow />,
  "OpenCV":            <SiOpencv />,
  "Pandas":            <SiPandas />,
  "APIs de IA (LLMs)": <SiOpenai />,
  // Qualidade
  "JUnit": <SiJunit5 />,
};

// ── Ícones de categoria (Feather) ─────────────────────────────────────────
const categoryIcons: Record<string, ReactElement> = {
  server:   <FiServer size={18} />,
  monitor:  <FiMonitor size={18} />,
  database: <FiDatabase size={18} />,
  cloud:    <FiCloud size={18} />,
  shield:   <FiShield size={18} />,
  cpu:      <FiCpu size={18} />,
  check:    <FiCheckSquare size={18} />,
};

function Skills() {
  return (
    <section id="skills" className="skills-section section" aria-label="Capacidades">
      <div className="section__inner">
        <FadeIn className="section-header" duration={420}>
          <p className="eyebrow">Stack</p>
          <h2 className="section-title">Tecnologias e Expertise.</h2>
        </FadeIn>

        {/* Resumo profissional */}
        <FadeIn className="skills-summary card" duration={430}>
          <p className="skills-summary__label eyebrow">Resumo profissional</p>
          <p className="skills-summary__text">{professionalSummary}</p>
        </FadeIn>

        <div className="skills-grid">
          {capabilityGroups.map((group) => (
            <FadeIn key={group.title} className="capability-card card" duration={430}>
              <div className="capability-card__header">
                <span className="capability-card__icon" aria-hidden="true">
                  {categoryIcons[group.icon] ?? categoryIcons.check}
                </span>
                <h3>{group.title}</h3>
              </div>

              <p className="capability-card__summary">{group.description}</p>

              <div className="tag-list">
                {group.technologies.map((technology) => {
                  const icon = techIcons[technology];
                  return (
                    <span key={technology} className={`tag${icon ? " tag--has-icon" : ""}`}>
                      {icon && (
                        <span className="tag__icon" aria-hidden="true">{icon}</span>
                      )}
                      {technology}
                    </span>
                  );
                })}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
