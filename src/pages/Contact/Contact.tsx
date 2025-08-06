import Navbar from "../../navbar/Navbar";
import "./index.css";
import animacao from "../../assets/danielAnimado.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container-contact">
        <h1>Vamos nos conectar?</h1>
        <h2>Se você tem um projeto em mente, uma dúvida ou só quer bater um papo sobre desenvolvimento, fique à vontade!</h2>
        <div style={{ backgroundImage: `url(${animacao})`, width: '240px', height: '240px', backgroundSize: 'contain', borderRadius: '50%',  backgroundRepeat: 'no-repeat' }}></div>
        <div>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email</p>
          <p><FontAwesomeIcon icon={faInstagram} /> Instagran</p>
          <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
          <p><FontAwesomeIcon icon={faLinkedin} /> Linkefin</p>
          <p><FontAwesomeIcon icon={faGithub} /> GitHub</p>
        </div>
        <div>Toda grande conexão começa com uma simples mensagem. Vamos criar algo incrível juntos?</div>
      </div>
    </div>
  );
};

export default Contact;
