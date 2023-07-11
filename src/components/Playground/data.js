import dribble from "../../assets/playground/company.jpg";
import random from "../../assets/playground/random.png";
import countdown from "../../assets/playground/countdown.png";
import awwwards from "../../assets/playground/awwwards.png";
import { ReactComponent as HtmlIcon } from "../../assets/technologies/net.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Intern Software Engineer - Sopwil Technologies ",
    description: "Worked as an intern software engineer for a whole year. While working I had experience mainly on maintaining ERP systems using ASP.net and many more technologies. Apart from that I earned soft skills such as team working skills, communication skills etc.",
    description1 : "2021 Nov - 2022 Nov, Colombo",
    img: dribble,
    techs:[<HtmlIcon />],
  },
  // {
  //   id: 2,
  //   projectName: "Random Quote Generator",
  //   liveLink: "https://js-project-quote-generator.netlify.app/",
  //   hasLink: true,
  //   img: random,
  // },
  // {
  //   id: 3,
  //   projectName: "New Year Countdown",
  //   hasLink: false,
  //   liveLink: "",
  //   img: countdown,
  // },
  // {
  //   id: 4,
  //   projectName: "Awwwards Clone",
  //   hasLink: false,
  //   liveLink: "",
  //   img: awwwards,
  // },
];
