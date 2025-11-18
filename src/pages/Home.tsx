import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Home.scss';
import avatar from "../assets/avatar_circular.png";

function Home() {
  return (
    <div className='home-container'>

        <div className='home-about-section'>
            <div className='home-image-wrapper'>
                <img 
                    src={avatar} 
                    alt="avatar" 
                />
            </div>

            <div className='home-content'>
                <div className="home-social-icons">
                    <a href="https://github.com/keltonmd" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/keltonmd/" target="_blank" rel="noreferrer">
                    <LinkedInIcon />
                    </a>
                </div>

                <h1>Kelton Martins</h1>
                <p>Desenvolvedor Back-end | IoT | AI & Robotics</p>

                <div className="home-mobile-social-icons">
                    <a href="https://github.com/keltonmd" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/keltonmd/" target="_blank" rel="noreferrer">
                    <LinkedInIcon />
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home;