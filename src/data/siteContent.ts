import corporateSystemsCover from "../assets/projects/desenvolvimento-sistemas-corporativos.svg";
import edgeBoxAiCover from "../assets/projects/edgeboxai.jpeg";
import fazendaCover from "../assets/projects/fazenda.png";
import navalStrikeCover from "../assets/projects/navalstrike.png";

export type NavigationItem = {
  label: string;
  id: string;
};

export type HeroMetric = {
  value: string;
  label: string;
};

export type CapabilityGroup = {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
};

export type HistoryEntry = {
  period: string;
  title: string;
  organization: string;
  summary: string;
  kind: "study" | "work";
};

export type ProjectCaseStudy = {
  id: string;
  title: string;
  category: string;
  href: string;
  summary: string;
  highlight: string;
  technologies: string[];
  image: string;
  imageAlt: string;
};

export type ContactLink = {
  label: string;
  href: string;
  kind: "github" | "linkedin" | "email";
};

export const navigationItems: NavigationItem[] = [
  { label: "Início", id: "home" },
  { label: "Stack", id: "skills" },
  { label: "Trajetória", id: "history" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

export const heroMetrics: HeroMetric[] = [
  { value: "Backend", label: "foco principal" },
  { value: "DevOps", label: "infra & cloud" },
  { value: "IA", label: "diferencial" },
];

export const professionalSummary =
  "Desenvolvedor com perfil voltado à resolução de problemas, com forte atuação em backend e infraestrutura, capaz de desenvolver e colocar sistemas completos em produção. Possui conhecimento em frontend para integração e construção de interfaces funcionais, além de interesse em aplicações com inteligência artificial.";

export const capabilityGroups: CapabilityGroup[] = [
  {
    icon: "server",
    title: "Backend",
    description:
      "APIs REST, regras de negócio, autenticação e integração com bancos de dados. Múltiplas stacks, código limpo e arquitetura em camadas.",
    technologies: [
      "Java",
      "Spring Boot",
      "PHP",
      "Symfony",
      "Python",
      "Flask",
      "Node.js",
    ],
  },
  {
    icon: "monitor",
    title: "Frontend",
    description:
      "Interfaces funcionais com React, foco em integração com APIs, controle de estado e componentes reutilizáveis.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3 / SCSS",
      "Bootstrap",
    ],
  },
  {
    icon: "database",
    title: "Banco de Dados",
    description:
      "Modelagem, consultas otimizadas e persistência em bancos relacionais e não-relacionais.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    icon: "cloud",
    title: "DevOps & Cloud",
    description:
      "Deploy e manutenção de aplicações em produção. Containers, proxy reverso, CI/CD e administração de servidores.",
    technologies: [
      "Docker",
      "Docker Compose",
      "AWS (EC2, S3, RDS)",
      "NGINX",
      "Linux",
      "GitHub Actions",
      "PM2",
    ],
  },
  {
    icon: "shield",
    title: "Segurança & Boas Práticas",
    description:
      "Controle de acesso, proteção de dados e boas práticas no desenvolvimento de APIs e sistemas.",
    technologies: [
      "JWT",
      "HTTPS / TLS",
      "Hash de senha",
      "Controle de acesso",
      "APIs seguras",
    ],
  },
  {
    icon: "cpu",
    title: "IA & Dados",
    description:
      "Integração e uso de inteligência artificial em aplicações, incluindo visão computacional e processamento de dados.",
    technologies: [
      "TensorFlow",
      "OpenCV",
      "Pandas",
      "APIs de IA (LLMs)",
    ],
  },
  {
    icon: "check",
    title: "Qualidade de Código",
    description:
      "Testes automatizados, organização e legibilidade como parte do processo de desenvolvimento.",
    technologies: [
      "JUnit",
      "Testes unitários",
      "Testes de integração",
      "Boas práticas",
    ],
  },
];

export const historyEntries: HistoryEntry[] = [
  {
    period: "02/2019 — 04/2022",
    title: "Técnico em Informática para Internet Integrado ao Ensino Médio",
    organization: "IFNMG — Campus Januária",
    summary:
      "Desenvolvimento web, algoritmos, banco de dados, manutenção e redes de computadores.",
    kind: "study",
  },
  {
    period: "05/2022 — 04/2026",
    title: "Bacharelado em Sistemas de Informação",
    organization: "IFNMG — Campus Januária",
    summary:
      "Desenvolvimento de software, IA, redes, sistemas distribuídos e engenharia de software.",
    kind: "study",
  },
  {
    period: "08/2024 — 12/2024",
    title: "Programa de Bolsa Treinamento – Campus Januária ",
    organization: "INFMG - Campus Januária - Secretaria de Ensino Superior",
    summary:
      "Gerenciamento de formulários, planilhas de matrícula e atendimento aos alunos.",
    kind: "work",
  },
  {
    period: "06/2025 — 12/2025",
    title: "Bolsa de Iniciação em Desenvolvimento Tecnológico e Inovação (PIBITI)",
    organization: "IFNMG — Campus Januária",
    summary:
      "Desenvolvimento de ecossistema IoRT para comunicação e colaboração entre robôs de serviço e agentes distribuídos.",
    kind: "work",
  },
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "edgeboxai",
    title: "EdgeBoxAI",
    category: "IoRT · Edge AI",
    href: "https://github.com/Keltonmd/EdgeBoxAI",
    summary: "Coordenação de robôs com MQTT e inferência embarcada.",
    highlight: "100% de sucesso em 200 operações integradas.",
    technologies: [
      "Python",
      "MQTT",
      "ESP32-S3",
      "TensorFlow Lite",
      "CoppeliaSim",
    ],
    image: edgeBoxAiCover,
    imageAlt: "Capa do projeto EdgeBoxAI",
  },
  {
    id: "fazenda",
    title: "Fazenda",
    category: "Sistema Corporativo",
    href: "https://github.com/Keltonmd/Fazenda",
    summary: "Gestão bovina com domínio forte e dashboard operacional.",
    highlight: "Symfony, Docker e regras de negócio no centro da solução.",
    technologies: ["PHP", "Symfony", "MySQL", "Docker", "Twig"],
    image: fazendaCover,
    imageAlt: "Capa do projeto Fazenda",
  },
  {
    id: "navalstrike",
    title: "NavalStrike",
    category: "Tempo Real",
    href: "https://github.com/Keltonmd/NavalStrike",
    summary: "Jogo multiplayer para aplicar WebSockets e concorrência.",
    highlight: "Backend em Python com operação em AWS.",
    technologies: ["Python", "Flask", "WebSockets", "AWS", "Nginx"],
    image: navalStrikeCover,
    imageAlt: "Capa do projeto NavalStrike",
  },
  {
    id: "corporate-systems",
    title: "Desenvolvimento de Sistemas Corporativos",
    category: "Gestão Operacional",
    href: "https://github.com/Keltonmd/Desenvolvimento-de-Sitemas-Corporativos",
    summary: "Gestão de voos, aeronaves e usuários com Spring.",
    highlight: "Integração com dados externos e foco administrativo.",
    technologies: ["Java", "Spring", "PostgreSQL", "AWS"],
    image: corporateSystemsCover,
    imageAlt: "Capa do projeto Desenvolvimento de Sistemas Corporativos",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/keltonmd",
    kind: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/keltonmd/",
    kind: "linkedin",
  },
  {
    label: "E-mail",
    href: "mailto:keltonm6@gmail.com",
    kind: "email",
  },
];
