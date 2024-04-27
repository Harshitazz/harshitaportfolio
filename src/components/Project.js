import React from "react";
import ProjectItem from "./ProjectItem";
import background1 from "./pictures/project1.png";
import background2 from "./pictures/project2.png";
import background3 from "./pictures/project3.png";
import background4 from "./pictures/project4.png";
import background5 from "./pictures/project5.png";


import './ProjectItem.css'
const Project = () => {
  return (
    <>
    <div className="app-container">
    <h1 className="heading1 heading2" 
        
        >
           <span>MY </span>PROJECTS
        </h1>
      <div className="projects-container">
      <div
        className="projects-grid"
      >
        <ProjectItem
          title="We-Chat"
          imageUrl={background5}
          githuburl="https://we-chat-9doc.onrender.com
          "
          tech="TechStack- Socketio| MERN | tailwind CSS | JWT | git"
        />
        <ProjectItem
          title="Place-Sight"
          imageUrl={background4}
          githuburl="https://github.com/Harshitazz/Social-Site"
          tech="TechStack- MERN stack | CSS | HTML | bootstrap"
        />
        <ProjectItem
          
          title="Podcaster"
          imageUrl={background2}
          githuburl="https://github.com/Harshitazz/song-player"
          tech="TechStack- HTML | CSS | JAVASCRIPT | Bootstrap"
        />
        <ProjectItem
          title="Newsapp"
          imageUrl={background1}
          githuburl="https://github.com/Harshitazz/newsapp"
          tech="TechStack- REACTjs | API | CSS | HTML | bootstrap"
        />
        <ProjectItem
          title="myToDo"
          imageUrl={background3}
          githuburl="https://github.com/Harshitazz/newsapp"
          tech="TechStack- REACTjs | CSS | HTML | bootstrap"
        />
      </div>
      </div>
    </div>

      
    </>
  );
};

export default Project;
