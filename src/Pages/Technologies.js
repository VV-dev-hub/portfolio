import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
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

  const techStack = [
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
        className="flex flex-col items-center p-4 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <img
          src={item.src}
          title={item.title}
          alt={item.title}
          className="w-16 h-16 object-contain mb-2"
        />
        <p className="text-sm font-semibold text-dark-heading dark:text-light-heading">
          {item.title}
        </p>
      </div>
    ));

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Section Environnement technologique */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Environnement technologique
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies avec lesquelles j'ai travaillé récemment
        </p>
      </section>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pt-6">
        {renderCards(techStack)}
      </section>

      {/* Section Outils */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Outils
        </h1>
      </section>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pt-6">
        {renderCards(tools)}
      </section>
    </main>
  );
}

export default Technologies;
