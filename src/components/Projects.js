import React from "react";
import styled from "styled-components";
import { Data } from "../Data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faEye,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <Section id="Projects">
      <h1>
        <FontAwesomeIcon icon={faDiagramProject} /> Projects
      </h1>
      <div>
        {Data.Projects.map((project) => {
          return (
            <div key={project.label} className="project">
              <div className="projectImg">
                <img src={project.img} alt={project.label} />
              </div>
              <div className="projectContent">
                <h2>{project.label}</h2>
                <div>
                  <a href={project.view} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEye} /> View
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faCode} /> Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.div`
  padding: 3rem 5%;
  padding-bottom: 6rem;
  height: auto;
  background-color: rgb(43, 61, 218);
  color: #f7f7f7;
  & > h1 {
    text-align: center;
    font-size: 3rem;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4rem 2rem;
    .project {
      .projectImg {
        & > img {
          width: 25rem;
          height: 15rem;
          object-fit: cover;
          border-radius: 1rem 1rem 0 0;
        }
      }
      .projectContent {
        position: absolute;
        color: black;
        background-color: rgb(149, 247, 183);
        margin-top: -1rem;
        width: 25rem;
        height: max-content;
        border-radius: 0 0 1rem 1rem;
        & > h2 {
          margin: 0.5rem 1rem;
        }
        & > div {
          margin: 0.5rem 2rem;
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          gap: 5rem;
          & > a {
            display: none;
            padding: 0.5rem 2rem;
            background-color: black;
            color: rgb(149, 247, 183);
            border-radius: 1rem;
            transition: 0.3s ease-in-out;
            &:hover {
              background-color: rgb(24, 35, 133);
              color: black;
              box-shadow: 5px 5px 5px rgba(81, 81, 81, 0.5);
            }
          }
        }
      }
      &:hover .projectContent {
        margin-top: -3.5rem;
        transition: 0.3s ease-in-out;
      }
      &:hover .projectContent > div > a {
        display: block;
      }
    }
    @media only screen and (max-width: 900px) {
      &>.projectImg > img {
        width: 20rem;
        height: 10rem;
      }
      &>.projectContent {
        width: 20rem;
      }
    }
  }
`;

export default Projects;
