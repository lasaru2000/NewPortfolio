import React from "react";
import "./style.css";
import {
  qualip1,
  qualip2,
  TutorHome1,
  TutorHome2,
  gym1,
  gym2,
  books1,
  books2,
  project5Laptop,
  project5Mobile,
  project6Laptop,
  project6Mobile,

} from "./projectImages";
import { ReactComponent as HtmlIcon } from "../../assets/technologies/nodejs.svg";
import { ReactComponent as HtmlIcon1 } from "../../assets/technologies/react.svg";
import { ReactComponent as HtmlIcon2 } from "../../assets/technologies/flask.svg";
import { ReactComponent as HtmlIcon3 } from "../../assets/technologies/tensorflow.svg";
import { ReactComponent as HtmlIcon4 } from "../../assets/technologies/firebase.svg";
import { ReactComponent as HtmlIcon5 } from "../../assets/technologies/opencv.svg";
import { ReactComponent as HtmlIcon6 } from "../../assets/technologies/mongo.svg";
import { ReactComponent as HtmlIcon7 } from "../../assets/technologies/python.svg";
import { ReactComponent as HtmlIcon8 } from "../../assets/technologies/numpy.svg";
import { ReactComponent as HtmlIcon9 } from "../../assets/technologies/postgres.svg";
import { ReactComponent as HtmlIcon10 } from "../../assets/technologies/sklearn.svg";
import { ReactComponent as HtmlIcon11 } from "../../assets/technologies/mui.svg";
import { ReactComponent as HtmlIcon12 } from "../../assets/technologies/ants.svg";
import { ReactComponent as HtmlIcon13 } from "../../assets/technologies/matplot.svg";
import { ReactComponent as HtmlIcon14 } from "../../assets/technologies/java.svg";
import { ReactComponent as HtmlIcon15 } from "../../assets/technologies/html.svg";
import { ReactComponent as HtmlIcon16 } from "../../assets/technologies/css.svg";
import { ReactComponent as HtmlIcon17 } from "../../assets/technologies/javascript.svg";


export const projectData = [
  {
    id: 1,
    image: qualip1,
    transitionImage: qualip2,
    title: " Qualip ",
    description:"Qualip is shoe quality assurance software using image processing. This software provide condition level of the shoe when provide the shoe image.",
    techs: [<HtmlIcon1 style={{width:'35px',height:'35px'}}/>,
    <HtmlIcon style={{width:'35px',height:'35px'}}/>,
    <HtmlIcon3 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon4 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon5 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon6 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon2 style={{width:'50px',height:'50px'}} />]

  },
  {
    id: 2,
    image: TutorHome1,
    transitionImage: TutorHome2,
    title: "TutorHome",
    description:"TutorHome is artificial inteligence basedlearning management system.This systems provide usual LMS feature with online communication platform and Automated answer sheet evaluation system using NLP. ",
    techs: 
    [<HtmlIcon1 style={{width:'35px',height:'35px'}}/>,
    <HtmlIcon7 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon3 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon8 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon10 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon11 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon12 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon9 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon13 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon2 style={{width:'50px',height:'50px'}} />]
  
  },
  {
    id: 3,
    image: gym1,
    transitionImage: gym2,
    title: "Gym Management",
    description:"This is simple gym management system with lot of features for make easier management purposes. ",
    techs:
    [<HtmlIcon14 style={{width:'40px',height:'40px'}} />,
    <HtmlIcon9 style={{width:'35px',height:'35px'}} />,
  ]

  },
  {
    id: 4,
    image:books1,
    transitionImage:books2,
    title: "BooksLookStore",
    description:"BooksLookStore online book store website with various kinds of features.",
    techs:[<HtmlIcon15 style={{width:'35px',height:'35px'}}/>,
    <HtmlIcon16 style={{width:'35px',height:'35px'}} />,
    <HtmlIcon17 style={{width:'35px',height:'35px'}} />,]

  },
  // {
  //   id: 5,
  //   image: project5Laptop,
  //   transitionImage: project5Mobile,
  //   title: "Gym Fitness Website",

  // },
  // {
  //   id: 6,
  //   image: project6Laptop,
  //   transitionImage: project6Mobile,
  //   title: "Space Tourism",

  // },
];
