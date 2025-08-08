import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../navbar/Navbar";
import "./index.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container-contact">
        <h1>Vamos nos conectar?</h1>
        <h2>
          Se você tem um projeto em mente, uma dúvida ou só quer bater um papo
          sobre desenvolvimento, fique à vontade!
        </h2>
        <div className="container-contact-icons">
          <div className="container-contact-animacao"></div>
          <div className="container-contact-icons-list">
            <a
              href="mailto:danielvicente63@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Enviar um e-mail
            </a>
            <a
              href="https://www.instagram.com/dvicente01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/daniel.vicente.796774/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-vicente-6717291ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a
              href="https://github.com/Danielvicente10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
        </div>

        <div>
          Toda grande conexão começa com uma simples mensagem. Vamos criar algo
          incrível juntos?
        </div>
      </div>
    </div>
  );
};

export default Contact;
