import React from "react";
import { Link } from "@reach/router";

const ProjectCard = ({
  project: {
    id,
    title,
    language,
    technologiesShort,
    cardBody,
    githubUrl,
    liveUrl,
    image,
    altImage,
  },
}) => {
  return (
    <li className="project-card">
      <Link
        to={process.env.PUBLIC_URL + `/project/${id}`}
        className="project-card-link"
      >
        {/* <a href={`/project/${id}`} className="project-card-link"> */}
        <img src={image} alt={altImage}></img>
        <h3>{title}</h3>
        <section>
          <p>{language}</p>
          {/* <ul> */}
          {technologiesShort.map((technology) => (
            <p>{technology}</p>
          ))}
          {/* </ul> */}
        </section>
        <p>{cardBody}</p>
        {/* </a> */}
      </Link>
    </li>
  );
};

export default ProjectCard;
