import PontoOnline from "../../assets/papel-parede-ponto.jpeg";
import Navbar from "../../navbar/Navbar";
import "./index.css";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="container-projects">
        <div
          style={{
            height: "100%",
            width: "100%",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* PONTO ONLINE */}
          <div
            style={{
              height: "450px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <span>Ponto online</span>
            <div
              style={{
                backgroundImage: `url(${PontoOnline})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
          {/* TPROJETO TESTE */}
          <div
            style={{
              height: "450px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <span>Ponto online</span>
            <div
              style={{
                backgroundImage: `url(${PontoOnline})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
          {/* PROJETO TESTE 2 */}
          <div
            style={{
              height: "450px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <span>Ponto online</span>
            <div
              style={{
                backgroundImage: `url(${PontoOnline})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
