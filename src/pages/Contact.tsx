import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { FadeIn } from "../components";
import { contactLinks } from "../data/siteContent";
import "../styles/Contact.scss";
import type { FormEvent } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

const renderIcon = (kind: string) => {
  if (kind === "github") return <GitHubIcon fontSize="small" />;
  if (kind === "linkedin") return <LinkedInIcon fontSize="small" />;
  return <MailOutlineRoundedIcon fontSize="small" />;
};

function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [notice, setNotice] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (value: string) => {
    const emailRegex = /^[\w.+-]+([\w-]+\.)+[a-z]{2,}$/i;
    return emailRegex.test(value);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: false }));
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValues = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      subject: formState.subject.trim(),
      message: formState.message.trim(),
    };

    const nextErrors = {
      name: trimmedValues.name === "",
      email: trimmedValues.email === "" || !isValidEmail(trimmedValues.email),
      subject: trimmedValues.subject === "",
      message: trimmedValues.message === "",
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setNotice({
        type: "error",
        message: "Preencha todos os campos corretamente antes de enviar.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setNotice({ type: null, message: "" });

      await emailjs.send(
        "service_v06y6q9",
        "template_30aw2vd",
        trimmedValues,
        "BxSZN2zzqFmIoVped",
      );

      setFormState({ name: "", email: "", subject: "", message: "" });
      setNotice({
        type: "success",
        message: "Mensagem enviada com sucesso. Retornarei assim que possível.",
      });
    } catch (error) {
      console.error(error);
      setNotice({
        type: "error",
        message: "Não foi possível enviar agora. Tente novamente em instantes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section section" aria-label="Contato">
      <div className="section__inner">
        <div className="contact-layout">
          <FadeIn className="contact-copy" duration={420}>
            <p className="eyebrow">Contato</p>
            <h2 className="section-title">Vamos conversar.</h2>

            <div className="contact-links card">
              <p className="eyebrow">Direto</p>
              <div className="contact-link-list">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    className="contact-link-item"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="contact-link-item__icon">
                      {renderIcon(link.kind)}
                    </span>
                    <span className="contact-link-item__label">{link.label}</span>
                  </a>
                ))}
              </div>
              <p className="contact-copy__note">Projetos, freelas e parcerias.</p>
            </div>
          </FadeIn>

          <FadeIn className="contact-form card" delay={100} duration={430}>
            <form onSubmit={sendEmail} noValidate>
              <div className="contact-form__grid">
                <label>
                  <span>Nome</span>
                  <input
                    type="text"
                    autoComplete="name"
                    value={formState.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    aria-invalid={errors.name}
                  />
                  {errors.name && <small>Informe seu nome.</small>}
                </label>

                <label>
                  <span>E-mail</span>
                  <input
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={formState.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    aria-invalid={errors.email}
                  />
                  {errors.email && <small>Informe um e-mail válido.</small>}
                </label>
              </div>

              <label>
                <span>Assunto</span>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(event) => updateField("subject", event.target.value)}
                  aria-invalid={errors.subject}
                />
                {errors.subject && <small>Defina o contexto da mensagem.</small>}
              </label>

              <label>
                <span>Mensagem</span>
                <textarea
                  rows={6}
                  value={formState.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  aria-invalid={errors.message}
                />
                {errors.message && <small>Escreva a mensagem.</small>}
              </label>

              <div className="contact-form__footer">
                {notice.type && (
                  <p
                    className={`contact-form__notice is-${notice.type}`}
                    role={notice.type === "error" ? "alert" : "status"}
                  >
                    {notice.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="button button--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Contact;
