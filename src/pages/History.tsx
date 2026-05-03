import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { FadeIn } from "../components";
import { historyEntries } from "../data/siteContent";
import "../styles/History.scss";

function HistoryTimeline() {
  return (
    <section id="history" className="history-section section" aria-label="Trajetória">
      <div className="section__inner">
        <FadeIn className="section-header" duration={420}>
          <p className="eyebrow">Trajetória</p>
          <h2 className="section-title">Linha do tempo.</h2>
        </FadeIn>

        <div className="history-timeline">
          {historyEntries.map((entry, index) => (
            <FadeIn
              key={`${entry.period}-${entry.title}`}
              className="history-entry"
              delay={index * 60}
              duration={430}
            >
              <div className="history-entry__period">{entry.period}</div>
              <div
                className={`history-entry__icon history-entry__icon--${entry.kind}`}
                aria-hidden="true"
              >
                {entry.kind === "study" ? <SchoolRoundedIcon /> : <WorkRoundedIcon />}
              </div>
              <article className="history-entry__card card">
                <p className="history-entry__organization">{entry.organization}</p>
                <h4>{entry.title}</h4>
                <p className="history-entry__description">{entry.summary}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HistoryTimeline;
