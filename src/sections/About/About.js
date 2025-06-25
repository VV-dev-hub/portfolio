import React from "react";
import WorkCard from "../../components/WorkCard/WorkCard";
import { personalDetails, workDetails, eduDetails } from "../../data/Data";
import "./About.scss";

export default function About() {
  return (
    <section id="a-propos" className="page">
      <section>
        <h2>
          Qui suis-je ?
        </h2>
        <p className="description">
          {personalDetails.about.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </section>
      <section>
      <h2>
          Expérience
        </h2>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <WorkCard
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
      <h2 className="about__title">
          Formation
        </h2>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <WorkCard
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </section>
  );
}
