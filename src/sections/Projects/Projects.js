// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectDetails } from "../../data/Data";
import "./Projects.scss";

export default function Projects() {
  return (
    <section id="projets" className="projects page">
      <section className="projects__section">
        <h2 className="projects__title">
          Projets
        </h2>
        
        <div className="projects__grid">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                competences,
                techstack,
                previewLink,
                githubLink,
              }) => (
                <ProjectCard
                  title={title}
                  image={image}
                  description={description}
                  competences={competences}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </section>
  );
}
