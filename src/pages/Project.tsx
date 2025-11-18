import '../styles/Project.scss';

function Projects() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projetos</h1>
            <p className="projects-subtitle">
                Em breve esta seção terá meus principais projetos completos — incluindo sistemas Web, IA, IoT, IoRT, APIs, automações e deploys profissionais.
            </p>

            <div className="projects-grid">

                {/* =====================
                    MODELO PARA COPIAR
                    Quando você tiver um projeto pronto,
                    basta duplicar o bloco abaixo e preencher 
                   ===================== */}

                {/*
                <div className="project">
                    <a href="LINK_DO_PROJETO" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="LINK_DO_PROJETO" target="_blank" rel="noreferrer">
                        <h2>NOME DO PROJETO</h2>
                    </a>
                    <p>
                        Breve descrição do projeto: tecnologias usadas, problema resolvido,
                        funcionalidade principal e impacto da aplicação.
                    </p>
                </div>
                */}

                <div className="project placeholder">
                    <div className="placeholder-box" />
                    <h2>Projeto em desenvolvimento</h2>
                    <p>Em breve um dos meus projetos pessoais estará disponível aqui.</p>
                </div>

                <div className="project placeholder">
                    <div className="placeholder-box" />
                    <h2>Projeto em desenvolvimento</h2>
                    <p>Novos sistemas, aplicações e ferramentas serão adicionados conforme finalização.</p>
                </div>

                <div className="project placeholder">
                    <div className="placeholder-box" />
                    <h2>Projeto em desenvolvimento</h2>
                    <p>Esta área será constantemente atualizada com projetos reais e completos.</p>
                </div>

            </div>
        </div>
    );
}

export default Projects;
