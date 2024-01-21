import React from "react";
import ProjectItem from "./ProjectItem";
import background1 from './pictures/project1.png';
import background2 from './pictures/project2.png'

const Project = () => {
  return (
    <>
      <div className="container" style={{margin:'auto'}}>
        <div className="col my-4">
          <div className="row  " >
            <ProjectItem
              number="Project #1"
              title='Podcaster'
              description='A simple website to listen to the top podcasts on Peace and Life.'
              imageurl={background2}
              githuburl="https://github.com/Harshitazz/song-player"
              tech="TechStack- HTML | CSS | JAVASCRIPT | Bootstrap"
            />
            <ProjectItem
            number="Project #2"
            title='Newsapp'
            description='A website to imply NEWS API and React framework to read the latest news according to different categories.'
            imageurl={background1}
            githuburl="https://github.com/Harshitazz/newsapp"
            tech="TechStack- REACTjs | API | CSS | HTML | bootstrap"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
