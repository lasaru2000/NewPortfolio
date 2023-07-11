import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Lasaru_cv.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
          I am currently completed final year of my Software Engineering bachelor’s degree program at
Informatics Institute of Technology which is affiliated with the University of Westminster. I hope
all the knowledge that I have gained over the past four years will be useful for my future.
          </StyledParagraph>
          <StyledParagraph>
          I studied
for three years, and I have worked in the industry as an intern full stack developer for a whole year.
As a student who has completed the two three of the degree program successfully and have work
experience in the industry for one year, I can bring a good potential to your company as an associate
software engineer. 
          </StyledParagraph>
          <StyledParagraph>
          I am a talented team player with excellent interpersonal skills such as
leadership, problem solving, time management and communication.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="Resume-Lasaru_udawatta"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
