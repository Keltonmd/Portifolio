import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

import "../styles/History.scss";

function HistoryTimeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Minha Trajetória</h1>

        <Timeline position="alternate">

          {/* Bacharelado */}
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2022 — 05/2026
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <h3>Bacharelado em Sistemas de Informação</h3>
              <h4>IFNMG — Campus Januária</h4>
              <p>
                Desenvolvimento de software, IA, redes, sistemas distribuídos
                e engenharia de software.
              </p>
            </TimelineContent>
          </TimelineItem>

          {/* Técnico */}
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2019 — 2022
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <h3>Técnico em Informática para Internet</h3>
              <h4>IFNMG — Integrado ao Ensino Médio</h4>
              <p>
                Desenvolvimento web, algoritmos, banco de dados,
                manutenção e redes de computadores.
              </p>
            </TimelineContent>
          </TimelineItem>

          {/* Bolsa Treinamento */}
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              08/2024 — 12/2024
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="secondary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <h3>Bolsa Treinamento — SESU IFNMG</h3>
              <h4>Secretaria de Ensino Superior</h4>
              <p>
                Gerenciamento de formulários, planilhas de matrícula
                e atendimento aos alunos.
              </p>
            </TimelineContent>
          </TimelineItem>

          {/* PIBITI */}
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              06/2025 — 12/2025
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="secondary">
                <WorkIcon />
              </TimelineDot>
            </TimelineSeparator>

            <TimelineContent>
              <h3>PIBITI — Desenvolvimento Tecnológico</h3>
              <h4>IFNMG — Pesquisa Científica</h4>
              <p>
                Desenvolvimento de ecossistema IoRT para comunicação
                e colaboração entre robôs de serviço e agentes distribuídos.
              </p>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </div>
    </div>
  );
}

export default HistoryTimeline;
