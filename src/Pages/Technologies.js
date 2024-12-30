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

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Environnement technologique
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies avec lesquelles j'ai travaillé récemment
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="HTML5" alt="" />
        <img src={css} title="CSS3" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
        <img src={vite} title="Vite.js" alt="" />
        <img src={mongodb} title="MongoDB" alt="" />
        <img src={nodejs} title="Node.js" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Outils
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="" />
        <img src={github} title="Github" alt="" />
        <img src={figma} title="Figma" alt="" />
        <img src={npm} title="NPM" alt="" />
        <img src={lighthouse} title="Lighthouse" alt="" />
        <img src={postman} title="Postman" alt="" />
        <img src={swagger} title="Swagger" alt="" />
        <img src={notion} title="Notion" alt="" />
      </section>
    </main>
  );
}

export default Technologies;
