// Ce fichier constitue la base de données de l'ensemble du site

// I - IMPORT
// Logos du site
import logotransparent from "../assets/logos/logotransparent.svg";
import logo from "../assets/logos/logo.svg";

// Photo de profil
import profile from "../assets/images/pp.webp";

// Logos des technologies
import html from "../assets/logos/html.webp";
import css from "../assets/logos/css.webp";
import sass from "../assets/logos/sass.webp";
import js from "../assets/logos/js.webp";
import react from "../assets/logos/react.webp";
import tailwind from "../assets/logos/tailwind.webp";
import bootstrap from "../assets/logos/bootstrap.webp";
import vscode from "../assets/logos/vscode.webp";
import github from "../assets/logos/github.webp";
import git from "../assets/logos/git.webp";
import npm from "../assets/logos/npm.webp";
import postman from "../assets/logos/postman.webp";
import figma from "../assets/logos/figma.webp";
import vite from "../assets/logos/vite.webp";
import mongodb from "../assets/logos/mongodb.webp";
import nodejs from "../assets/logos/nodejs.webp";
import lighthouse from "../assets/logos/lighthouse.webp";
import swagger from "../assets/logos/swagger.webp";
import notion from "../assets/logos/notion.webp";

// Illustrations des projets
import projectImage1 from "../assets/images/projet1.webp";
import projectImage2 from "../assets/images/projet2.webp";
import projectImage3 from "../assets/images/projet3.webp";
import projectImage4 from "../assets/images/projet4.webp";
import projectImage5 from "../assets/images/projet5.webp";

// II- EXPORT
// Logos du site
export const logos = {
  logotransparent: logotransparent,
  logo: logo,
};

// Informations personnelles
export const personalDetails = {
  name: "Victor Vagné",
  tagline: "Je suis créateur de solutions web 💻",
  img: profile,
  about: `Docteur en Systèmes Automatiques et Microélectronique, Lean Manager et en découverte du développement web, je combine rigueur scientifique, optimisation des processus et créativité technique pour concevoir des solutions robustes et adaptées aux besoins des clients.
  
  Passionné par le travail en équipe, je m’attache à instaurer un climat de confiance propice à la réflexion et à la collaboration, tout en garantissant des résultats alignés avec les objectifs de l’entreprise.
  
  Je vous propose de concevoir des interfaces intuitives en adoptant une approche centrée utilisateur, alliant logique, efficacité et expérience optimale.`,
};

// URL des media sociaux
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/victor-vagne",
  github: "https://github.com/vv-dev-hub",
};

// Expériences professionnelles
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

// Formations réalisées
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

// Technologies et outils
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

// Projets
export const projectDetails = [
  {
    title: "Intégration web - Booki",
    image: projectImage1,
    description: `Intégration d’un site statique de locations d'hébergements.`,
    competences: `- Intégrer du contenu statique et interactif  conforme à une maquette (respect des conventions W3C)
    - Implémenter une interface responsive (vues "mobile", "tablette" et "desktop" via des media queries, approche "mobile first")`,
    techstack: "HTML, CSS, Figma, Git",
    previewLink: "https://google.com",
    githubLink: "https://github.com/VV-dev-hub/Formation_OC-P2-Booki",
  },
  {
    title: "Développement web dynamique - Sophie Bluel",
    image: projectImage3,
    description: `Transformation d'un site partiellement statique en site dynamique avec JavaScript.`,
    competences: `- Récupérer les données utilisateurs via des formulaires (connexion, gestionnaire de cartes "projets")
    - Manipuler les éléments du DOM dynamiquement
    - Gérer les événements utilisateurs`,
    techstack: "JavaScript, Postman, Node.js, npm",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/VV-dev-hub/Formation_OC-P3-Architecte_Sophie_Bluel",
  },
  {
    title: "Optimisation et débogage - Nina Carducci",
    image: projectImage2,
    description: `Optimisation d’un site web existant.`,
    competences: `- Optimiser les performances, l'accessibilité et le SEO d’un site web
    - Débugger un site web grâce aux Chrome DevTools (console, breakpoints, requêtes)
    - Rédiger un  rapport d'optimisation accessible au client`,
    techstack: "Lighthouse, GTMetrix, Chrome DevTools, HTML, CSS",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/VV-dev-hub/Formation_OC-P4-Optimisation_Nina_Carducci",
  },

  {
    title: "Développement d'une web app - Kasa",
    image: projectImage4,
    description: `Refonte d’un site web existant avec React et Sass.`,
    competences: `- Initialiser une application React (Create React App, Vite)
    - Configurer la navigation entre les pages de l'application (React Router)
    - Développer des éléments d'interface réutilisable (composants React)
    - Utiliser et gérer les états d’une application (useState, useReducer)`,
    techstack: "React, Vite, Sass, Figma",
    previewLink: "https://google.com",
    githubLink: "https://github.com/VV-dev-hub/Formation_OC-P5-Refonte_Kasa",
  },
  {
    title: "Développement back-end - Mon Vieux Grimoire",
    image: projectImage5,
    description: `Développement du back-end d'un site de notation de livres.`,
    competences: `- Implémenter un modèle logique de données conformément à la réglementation (MongoDB, Mongoose)
    - Mettre en œuvre des opérations CRUD  (Express.js)
    - Assurer la sécurisation de l'authentification utilisateur et de la gestion des données (JWT, bcrypt)`,
    techstack: "Node.js, MongoDB, Mongoose",
    previewLink: "https://google.com",
    githubLink:
      "https://github.com/VV-dev-hub/Formation_OC-P6-Backend_Mon_Vieux_Grimoire",
  },
];

// Contact
export const contactDetails = {
  email: "victor.vagne@gmail.com",
  phone: "06 26 76 04 40",
};
