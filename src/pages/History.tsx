import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

import "../styles/History.scss";

const historyItems = [
  {
    date: "2022 — 05/2026",
    title: "Bacharelado em Sistemas de Informação",
    subtitle: "IFNMG — Campus Januária",
    description:
      "Desenvolvimento de software, IA, redes, sistemas distribuídos e engenharia de software.",
    icon: <SchoolIcon />,
    color: "primary" as const,
  },
  {
    date: "2019 — 2022",
    title: "Técnico em Informática para Internet",
    subtitle: "IFNMG — Integrado ao Ensino Médio",
    description:
      "Desenvolvimento web, algoritmos, banco de dados, manutenção e redes de computadores.",
    icon: <SchoolIcon />,
    color: "primary" as const,
  },
  {
    date: "08/2024 — 12/2024",
    title: "Bolsa Treinamento — SESU IFNMG",
    subtitle: "Secretaria de Ensino Superior",
    description:
      "Gerenciamento de formulários, planilhas de matrícula e atendimento aos alunos.",
    icon: <WorkIcon />,
    color: "secondary" as const,
  },
  {
    date: "06/2025 — 12/2025",
    title: "PIBITI — Desenvolvimento Tecnológico",
    subtitle: "IFNMG — Pesquisa Científica",
    description:
      "Desenvolvimento de ecossistema IoRT para comunicação e colaboração entre robôs de serviço e agentes distribuídos.",
    icon: <WorkIcon />,
    color: "secondary" as const,
  },
];

function HistoryTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div id="history">
      <div className="items-container">
        <h1>Minha Trajetória</h1>

        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={
            isMobile
              ? {
                  padding: 0,
                  "& .MuiTimelineItem-root:before": {
                    flex: 0,
                    padding: 0,
                  },
                }
              : {}
          }
        >
          {historyItems.map((item, index) => (
            <TimelineItem key={index}>
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.date}
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Paper elevation={3} className="timeline-card">
                  {isMobile && (
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{
                        color: "#5000ca",
                        fontWeight: "bold",
                        marginBottom: "8px",
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.date}
                    </Typography>
                  )}

                  <Typography variant="h6" component="span">
                    {item.title}
                  </Typography>
                  <Typography className="subtitle">{item.subtitle}</Typography>
                  <Typography className="description">
                    {item.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default HistoryTimeline;