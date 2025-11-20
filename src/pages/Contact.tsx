import React, {useRef, useState} from "react";
import '../styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import type { AlertColor } from "@mui/material/Alert";
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [subject, setSubject] = useState<string>("");
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
    const [snackStatus, setSnackStatus] = useState<AlertColor>("success");


    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);
    const [subjectError, setSubjectError] = useState<boolean>(false);

    const form = useRef<HTMLFormElement | null>(null);

    const showSnackbar = (message: string, status: AlertColor) => {
        setSnackMessage(message);
        setSnackStatus(status);
        setSnackOpen(true);
    };

    const handleSnackClose = () => {
        setSnackOpen(false);
    };

    const isValidEmail = (value: string) => {
        const emailRegex = /^[\w.+-]+@([\w-]+\.)+[a-z]{2,}$/i;
        return emailRegex.test(value);
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();

        setNameError(trimmedName=== '');
        setSubjectError(trimmedSubject === '');
        setMessageError(trimmedMessage === '');
        setEmailError(trimmedEmail === '' || !isValidEmail(trimmedEmail));

        if ( trimmedName === '' || trimmedEmail === '' || !isValidEmail(trimmedEmail) || trimmedSubject === '' || trimmedMessage === '') {
            showSnackbar("Por favor, preencha todos os campos corretamente.", "error");
            return;
        }

        emailjs
            .send(
                'service_v06y6q9',
                'template_30aw2vd',
                {
                    name: name,
                    email: trimmedEmail,
                    subject: trimmedSubject,
                    message: trimmedMessage,
                },
                'BxSZN2zzqFmIoVped'
            )
            .then(() => {
                showSnackbar("Mensagem enviada com sucesso!", "success");

                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            })
            .catch((err) => {
                console.error(err);
                showSnackbar("Erro ao enviar a mensagem. Tente novamente.", "error");
            });
    };

    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact-wrapper">
                    <h1>Contato</h1>
                    <p>
                        Tem uma ideia, projeto ou duvida?
                        <br /> Vamos conversar!
                    </p>
                    <Box 
                        ref={form}
                        component="form"
                        noValidate
                        autoComplete="off"
                        className="contact-form"
                    >
                        <div className="form-flex">
                            <TextField
                                required
                                label="Seu nome"
                                placeholder = "Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={nameError}
                                helperText={nameError ? "Digite seu nome" : ""}
                            />

                            <TextField
                                required
                                label="Email"
                                placeholder = "Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? "Digite um Email" : ""}
                            />

                        </div>

                        <div className="form-block">
                            <TextField
                                required
                                label="Assunto"
                                placeholder="Sobre o que quer falar?"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                error={subjectError}
                                helperText={subjectError ? "Informe o assunto" : ""}
                            />
                            <TextField
                                required
                                label="Mensagem"
                                placeholder = "Escreva sua mensagem"
                                multiline
                                rows={8}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                error={messageError}
                                helperText={messageError ? "Digite uma Mensagem" : ""}
                            />
                        </div>

                        <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}> 
                            Enviar
                        </Button>

                    </Box>
                </div>

            </div>
            <Snackbar
                open={snackOpen}
                autoHideDuration={4000}
                onClose={handleSnackClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MuiAlert
                    onClose={handleSnackClose}
                    severity={snackStatus}
                    sx={{ width: "100%" }}
                    variant="filled"
                    elevation={6}
                >
                    {snackMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );
}

export default Contact;