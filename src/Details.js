// Enter all your details in this file
// Logo images
import logotransparent from "./assets/logotransparent.svg";
import logo from "./assets/logo.svg";
// Profile Image
import profile from "./assets/pp.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import vite from "./assets/techstack/vite.png";
import mongodb from "./assets/techstack/mongodb.png";
import nodejs from "./assets/techstack/nodejs.png";
import lighthouse from "./assets/techstack/lighthouse.png";
import swagger from "./assets/techstack/swagger.png";
import notion from "./assets/techstack/notion.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";

// Logos
export const logos = {
  logotransparent: logotransparent,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Victor Vagné",
  tagline: "Je suis créateur de solutions web 💻",
  img: profile,
  about: `Docteur en Systèmes Automatiques et Microélectronique, ancien Lean Manager et en reconversion dans le développement web, je combine rigueur scientifique, optimisation des processus et créativité technique pour concevoir des solutions robustes et adaptées aux besoins des clients.
  
  Passionné par le travail en équipe, je m’attache à instaurer un climat de confiance propice à la réflexion et à la collaboration, tout en garantissant des résultats alignés avec les objectifs de l’entreprise.
  
  Mon ambition : développer des applications web innovantes qui servent autant le client final que les équipes qui les implémentent.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/victor-vagne",
  github: "https://github.com/V1ct0r-V",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: `Chargé de projet IT - ERP "Les Brigadiers"`,
    Company: `La Brigade de Véro`,
    Location: "Montpellier",
    Type: "Mission",
    Duration: "Sep 2022 - Juin 2023",
  },
  {
    Position: "Lean Manager",
    Company: `La Brigade de Véro`,
    Location: "Montpellier",
    Type: "CDI",
    Duration: "Nov 2020 - Sept 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Certification professionnelle - Développeur Web",
    Company: "OpenClassrooms",
    Location: "En ligne",
    Type: "Bac +2",
    Duration: "Déc 2023 - Jan 2024",
  },
  {
    Position:
      "Doctorat - Couplage de la spectroscopie en proche infrarouge et de la stimulation par hypercapnie dans le cadre de l'évaluation diagnostique de l'AVC ischémique",
    Company: `LIRMM, CHRU de Montpellier`,
    Location: "Montpellier",
    Type: "Bac +8",
    Duration: "Sept 2016 - Déc 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  vite: vite,
  mongodb: mongodb,
  nodejs: nodejs,
  lighthouse: lighthouse,
  swagger: swagger,
  notion: notion,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Intégration web - Booki",
    image: projectImage1,
    description: `- Intégrer du contenu statique et interactif  conforme à une maquette (respect des conventions W3C)
    - Implémenter une interface responsive (vues "mobile", "tablette" et "desktop" via des media queries, approche "mobile first")`,
    techstack: "HTML, CSS, Figma, Git",
    previewLink: "https://google.com",
    githubLink: "https://github.com/V1ct0r-V/Formation_OC-P2-Booki",
  },
  {
    title: "Développement web dynamique - Sophie Bluel",
    image: projectImage3,
    description: `- Récupérer les données utilisateurs via des formulaires
    - Manipuler les éléments du DOM dynamiquement
    - Gérer les événements utilisateurs`,
    techstack: "JavaScript, Postman, Node.js, npm",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/V1ct0r-V/Formation_OC-P3-Architecte_Sophie_Bluel",
  },
  {
    title: "Optimisation et débogage - Nina Carducci",
    image: projectImage2,
    description: `- Optimiser les performances d’un site web
    - Débugger un site web grâce aux Chrome DevTools (console, breakpoints, requêtes)
    - Rédiger un  rapport d'optimisation (performances, accessibilité, SEO)`,
    techstack: "Lighthouse, GTMetrix, Chrome DevTools, HTML, CSS",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/V1ct0r-V/Formation_OC-P4-Optimisation_Nina_Carducci",
  },

  {
    title: "Développement d'une web app - Kasa",
    image: projectImage4,
    description: `- Initialiser une application React (Create React App, Vite)
    - Configurer la navigation entre les pages de l'application (React Router)
    - Développer des éléments d'interface réutilisable (composants React)
    - Utiliser et gérer les états d’une application (useState, useReducer)`,
    techstack: "React, Vite, Sass, Figma",
    previewLink: "https://google.com",
    githubLink: "https://github.com/V1ct0r-V/Formation_OC-P5-Refonte_Kasa",
  },
  {
    title: "Développement back-end - Mon Vieux Grimoire",
    image: projectImage5,
    description: `- Implémenter un modèle logique de données conformément à la réglementation (MongoDB, Mongoose)
    - Mettre en œuvre des opérations CRUD  (Express.js)
    - Assurer la sécurisation de l'authentification utilisateur et de la gestion des données (JWT, bcrypt)`,
    techstack: "Node.js, MongoDB, Mongoose",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/V1ct0r-V/Formation_OC-P6-Backend_Mon_Vieux_Grimoire",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "victor.vagne@gmail.com",
  phone: "06 26 76 04 40",
};
