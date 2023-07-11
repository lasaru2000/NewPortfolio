import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import {
  LinkName,
  ProjectCard,
  ProjectCodeLink,
  ProjectDetails,
  ProjectImage,
  ProjectLiveLink,
  ProjectTitle,
  ProjectDescription,
  ProjectTransitionImage,
  ProjectTechs,
} from "../styles/Projects.styled";


const ProjectCardComponent = ({
  image,
  transitionImage,
  title,
  codeLink,
  liveLink,
  description,
  techs
}) => {
  return (
    <>
      <IconContext.Provider value={{ size: "1rem" }}>
        <ProjectCard>
          <ProjectImage src={image} alt={title} />
          <ProjectTransitionImage src={transitionImage} alt={title} />
          <ProjectDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectTechs>{techs}</ProjectTechs>
            {/* <ProjectCodeLink
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
              <LinkName>Github Code</LinkName>
            </ProjectCodeLink>
            <ProjectLiveLink
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal />
              <LinkName>Live</LinkName>
            </ProjectLiveLink> */}
          </ProjectDetails>
        </ProjectCard>
      </IconContext.Provider>
    </>
  );
};

export default ProjectCardComponent;
