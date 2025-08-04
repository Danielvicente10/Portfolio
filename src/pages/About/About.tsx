import DanielFoto from "../../assets/Daniel foto.jpg";
import Navbar from "../../navbar/Navbar";
import "./index.css";

const About = () => {
  return (
    <div className="container-about-page">
      <Navbar />
      <div className="container-about">
        <div className="container-about-content">
          <div
            className="container-about-text"
            style={{ backgroundImage: `url(${DanielFoto})` }}
          ></div>
          <div className="container-about-description">
            <h1>Sobre mim</h1>
            <p>
              Olá, meu nome é Daniel e sou desenvolvedor web com foco em criação
              de soluções digitais funcionais, responsivas e bem estruturadas.
              Tenho experiência tanto no desenvolvimento front-end quanto no
              back-end, e estou sempre buscando aprimorar minhas habilidades e
              acompanhar as tendências e boas práticas do mercado.
            </p>
            <p>
              Neste portfólio, você encontrará alguns dos meus projetos mais
              recentes, que demonstram meu comprometimento com a qualidade do
              código, usabilidade e eficiência. Busco constantemente desafios
              que me permitam crescer tecnicamente e contribuir para soluções
              inovadoras.
            </p>
            <p>
              Atualmente, atuo há 2 anos em uma empresa de tecnologia que presta
              serviços para uma organização do ramo contábil. Nessa parceria,
              participo ativamente do desenvolvimento e manutenção de um sistema
              SaaS que é a principal ferramenta utilizada pela equipe da
              contabilidade. O sistema possui dois ambientes principais: o
              "Legado" e a "API".
            </p>
            <p>
              O ambiente "Legado" foi desenvolvido inicialmente com C# (ASP.NET)
              no back-end, utilizando HTML, CSS e jQuery no front-end, com banco
              de dados SQL Server. Já o ambiente "API" é uma evolução do
              sistema, onde desenvolvemos novas funcionalidades e também
              realizamos a migração gradual do código legado para uma estrutura
              mais moderna e organizada, utilizando o framework Nest.js no
              back-end. Estamos, inclusive, em fase de planejamento para
              implementar o front-end com React.js.
            </p>
          </div>
        </div>
        <div className="container-about-skills">
          <h2>Skills.</h2>
          <ul>
            <li data-tooltip="Criação de páginas web, listas, tabelas, imagens e links.">
              HTML
            </li>
            <li data-tooltip="Estilização moderna e responsiva com flexbox e grid.">
              CSS
            </li>
            <li data-tooltip="Scripts interativos e manipulação do DOM. ( jquery, vue, react )">
              JavaScript
            </li>
            <li data-tooltip="Tipagem forte e código mais robusto.">
              TypeScript
            </li>
            <li data-tooltip="APIs estruturadas e organizadas com Nest.js.">
              Node.js (Nest.js)
            </li>
            <li data-tooltip="Desenvolvimento de aplicações web com foco em performance e escalabilidade.">
              C# (ASP.NET)
            </li>
            <li data-tooltip="Consultas em banco de dados.">SQL</li>
            <li data-tooltip="Controle de versão, branches e colaboração.">
              Git e GitHub
            </li>
            <li data-tooltip="Protótipos de interface e design visual.">
              Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
