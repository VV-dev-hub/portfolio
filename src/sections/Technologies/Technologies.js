import React from "react";
import { techStackDetails } from "../../data/Data";
import "./Technologies.scss";

export default function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    lighthouse,
    vite,
    mongodb,
    nodejs,
    swagger,
    notion,
  } = techStackDetails;

  const techstack = [
    { src: html, title: "HTML5" },
    { src: css, title: "CSS3" },
    { src: js, title: "JavaScript" },
    { src: react, title: "React" },
    { src: tailwind, title: "Tailwind CSS" },
    { src: bootstrap, title: "Bootstrap" },
    { src: sass, title: "SASS" },
    { src: vite, title: "Vite.js" },
    { src: mongodb, title: "MongoDB" },
    { src: nodejs, title: "Node.js" },
  ];

  const tools = [
    { src: vscode, title: "Visual Studio Code" },
    { src: git, title: "Git" },
    { src: github, title: "Github" },
    { src: figma, title: "Figma" },
    { src: npm, title: "NPM" },
    { src: lighthouse, title: "Lighthouse" },
    { src: postman, title: "Postman" },
    { src: swagger, title: "Swagger" },
    { src: notion, title: "Notion" },
  ];

  const renderCards = (items) =>
    items.map((item, index) => (
      <div
        key={index}
        className="technologies__card"
      >
        <img
          src={item.src}
          title={item.title}
          alt={item.title}
          loading="lazy"
          className="technologies__card-image"
        />
        <p className="technologies__card-title">
          {item.title}
        </p>
      </div>
    ));

  return (
    <section id="technologies" className="technologies page">
      {/* Section Environnement technologique */}
      <section className="technologies__section">
        <h2 className="technologies__title">
          Environnement technologique
        </h2>
        <p className="technologies__subtitle">
          Technologies avec lesquelles j'ai travaillé récemment
        </p>
      </section>
      <section className="technologies__grid">
        {renderCards(techstack)}
      </section>

      {/* Section Outils */}
      <section className="technologies__section">
        <h2 className="technologies__title--tools">
          Outils
        </h2>
      </section>
      <section className="technologies__grid">
        {renderCards(tools)}
      </section>
    </section>
  );
}
