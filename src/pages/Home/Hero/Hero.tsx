import { useEffect } from "react";
import "./index.css";

const Hero = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "../../backgroundAnimation.js";
      script.async = true;
      document.body.appendChild(script);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div id="large-header" className="large-header">
      <canvas id="demo-canvas"></canvas>
      <h1 className="main-title">Bem vindo ao meu portifólio</h1>
    </div>
  );
};

export default Hero;
