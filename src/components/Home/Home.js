import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
  Quote,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import backgroundVideo from "../../assets/back.mp4";
import resume from "../../assets/Lasaru_cv.pdf";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();
    

  return (
    <IconContext.Provider value={{ size: "0rem" }}>
      <StyledHome id="home" style={{ background: "transparent" }}>
      <video className="background-video" autoPlay muted loop>
  <source src={backgroundVideo} type="video/mp4" />
</video>

        <Name>Lasaru Nilhan</Name>
        <Title>Full-stack Developer</Title>
        <p>
          I <span className="change-text"></span>{" "}
          <span className="responsive">r</span>
          <span className="responsive">e</span>
          <span className="responsive">s</span>
          <span className="responsive">p</span>
          <span className="responsive">o</span>
          <span className="responsive">n</span>
          <span className="responsive">s</span>
          <span className="responsive">i</span>
          <span className="responsive">v</span>
          <span className="responsive">e</span> websites.
        </p>
        <StyledButtonsContainer>
          <a href={resume} target="_blank">
        <StyledButton
  icon={aboutIcon}
  to="about"
  smooth={true}
  duration={0}
  delay={0}
  spy={true}
  spyThrottle={0}
  exact="true"
  offset={-50}
>
  <span>Resume</span>
</StyledButton>
{/* <button>hello</button> */}
</a>


          {/* <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About me</span>
          </StyledButton> */}
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          have a great
          <span>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>
          .
        </Greeting>
        <Socials>
          <Social
            href="mailto:jerichobantiquete@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/monciego"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          <Social
            href="https://www.linkedin.com/in/jericho-bantiquete-450541179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
        <Quote>Don't wish for it! Work for it!</Quote>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
