import React from "react";
import { IconContext } from "react-icons";
import {
  PlaygroundImage,
  PlaygroundProjectDetails,
  PlaygroundProjectImageContainer,
  PlayGroundProjectLive,
  PlaygroundProjectName,
  PlaygroundProject,
  LinkWrapper,
  LiveIcon,
  PlaygroundProjectWrapper,
} from "../styles/Playground.styled";
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

const PlaygroundProjectComponent = ({
  img,
  projectName,
  description,
  description1,
  techs,
}) => {
  return (
    <>
      <IconContext.Provider value={{ size: "1rem" }}>
        <ProjectCard>
          <ProjectImage src={img} />
          <ProjectDetails>
            <ProjectTitle>{projectName}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectDescription>{description1}</ProjectDescription>
          </ProjectDetails>
        </ProjectCard>
      </IconContext.Provider>
    </>
  );
};

export default PlaygroundProjectComponent;
