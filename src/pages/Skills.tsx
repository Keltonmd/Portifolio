import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faPython,
    faJava,
    faJs,
    faDocker,
    faLinux,
} from '@fortawesome/free-brands-svg-icons';

import Chip from '@mui/material/Chip';
import '../styles/Skills.scss';


const frontendSkills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SCSS",
];

const backendSkills = [
    "Java",
    "Spring Boot",
    "Python",
    "Node.js",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
];

const devopsSkills = [
    "AWS EC2",
    "NGINX",
    "Docker",
    "Linux",
    "CI/CD",
    "Git & GitHub",
    "Reverse Proxy",
    "PM2",
    "SSH & Hardening",
];

const aiSkills = [
    "TensorFlow",
    "Keras",
    "PyTorch",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "CNNs",
    "LLMs",
];

const iotSkills = [
    "MQTT",
    "Mosquitto",
    "RabbitMQ",
    "ESP32 / ESP32-S3",
    "Intel Edison",
    "CoppeliaSim",
    "IoRT Multi-agente",
    "Robótica de Serviço",
    "Sistemas Distribuídos",
];

const softSkills = [
    "Organização e Documentação",
    "Metodologias Ágeis (Scrum/Kanban)",
    "Boa comunicação",
    "Trabalho em equipe",
    "Proatividade",
    "Visão de arquitetura",
    "Resolução de problemas",
];



function Skills() {
    return (
        <div className="container" id="skills">
            <div className="skills-container">
                <h1>Skills & Expertise</h1>

                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Frontend Development</h3>
                        <p>Trabalho com React e TypeScript criando interfaces limpas, rápidas e objetivas. Gosto de montar componentes bem organizados, fáceis de manter e com boa responsividade. Sei estruturar desde o básico até telas completas, sempre priorizando clareza, usabilidade e performance. Meu foco é transformar ideias em interfaces realmente funcionais, não só bonitas.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tecnologias:</span>
                            {frontendSkills.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faJava} size="3x"/>
                        <h3>Backend Development</h3>
                        <p>Tenho experiência sólida em Java com Spring Boot, Python e Node.js. Sei montar APIs completas, seguras e bem documentadas. Entendo de arquitetura, padrões, autenticação e integração com PostgreSQL. Gosto de backend limpo e direto, que funciona, escala e resolve problema real. Meu objetivo é entregar algo robusto, não complicado.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tecnologias:</span>
                            {backendSkills.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>DevOps, Servidores & Cloud</h3>
                        <p>Já configurei vários ambientes Linux, servidores Nginx, HTTPS, deploys na AWS EC2 e automações com Docker e GitHub Actions. Sei lidar com SSH, redes, processos e segurança. Curto transformar um código rodando localmente em algo realmente disponível online, com estabilidade, logs e tudo funcionando como deve ser.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Ferramentas:</span>
                            {devopsSkills.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x"/>
                        <h3>Inteligência Artificial & Deep Learning</h3>
                        <p>Trabalho com TensorFlow, Keras, PyTorch e scikit-learn criando modelos de classificação, visão computacional e soluções práticas. Já treinei CNNs, fiz quantização para rodar em dispositivos embarcados e integrei IA com sistemas reais. Gosto de unir teoria com prática: entender o modelo, medir, ajustar e colocar para funcionar.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Frameworks:</span>
                            {aiSkills.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faJs} size="3x"/>
                        <h3>IoT, IoRT e Robótica</h3>
                        <p>Tenho experiência real montando sistemas IoT e IoRT com ESP32, Intel Edison, MQTT, RabbitMQ e simulações no CoppeliaSim. Já trabalhei com robôs multiagentes, automação e comunicação distribuída. Sei unir hardware, software e rede. Gosto desse mundo porque tudo acontece de verdade: dados, sensores, movimento e decisão.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Experiência:</span>
                            {iotSkills.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faLinux} size="3x"/>
                        <h3>Comportamento & Metodologias</h3>
                        <p>Sou uma pessoa organizada, curiosa e que aprende rápido. Gosto de trabalhar com clareza, documentação e comunicação direta. Sei me virar sozinho quando preciso, mas também colaboro bem em equipe. Uso metodologias ágeis de forma prática, sem exageros. Meu foco é entregar, melhorar e crescer tecnicamente a cada projeto.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Soft Skills:</span>
                            {softSkills.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
