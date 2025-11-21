import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Paper from "@mui/material/Paper"; // Importado para criar o Card
import Typography from "@mui/material/Typography"; // Para tipografia consistente

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
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2022 — 05/2026
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper elevation={3} className="timeline-card">
                <Typography variant="h6" component="span">
                  Bacharelado em Sistemas de Informação
                </Typography>
                <Typography className="subtitle">IFNMG — Campus Januária</Typography>
                <Typography className="description">
                  Desenvolvimento de software, IA, redes, sistemas distribuídos e
                  engenharia de software.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* Técnico */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2019 — 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper elevation={3} className="timeline-card">
                <Typography variant="h6" component="span">
                  Técnico em Informática para Internet
                </Typography>
                <Typography className="subtitle">IFNMG — Integrado ao Ensino Médio</Typography>
                <Typography className="description">
                  Desenvolvimento web, algoritmos, banco de dados, manutenção e
                  redes de computadores.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* Bolsa Treinamento */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              08/2024 — 12/2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper elevation={3} className="timeline-card">
                <Typography variant="h6" component="span">
                  Bolsa Treinamento — SESU IFNMG
                </Typography>
                <Typography className="subtitle">Secretaria de Ensino Superior</Typography>
                <Typography className="description">
                  Gerenciamento de formulários, planilhas de matrícula e
                  atendimento aos alunos.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* PIBITI */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              06/2025 — 12/2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper elevation={3} className="timeline-card">
                <Typography variant="h6" component="span">
                  PIBITI — Desenvolvimento Tecnológico
                </Typography>
                <Typography className="subtitle">IFNMG — Pesquisa Científica</Typography>
                <Typography className="description">
                  Desenvolvimento de ecossistema IoRT para comunicação e
                  colaboração entre robôs de serviço e agentes distribuídos.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default HistoryTimeline;