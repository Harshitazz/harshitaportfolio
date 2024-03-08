import React from "react";
import "./About.css";

const About = () => {
  return (
    
    <div className="containerabout">
      {/* <div className="overlay"></div> */}
      <h1 className="heading1"
        
      >
        ABOUT <span>ME</span>
      </h1>
      <h4 style={{ color: "azure", margin:'2px'}}>I am proficient in languages like C++ and Python.</h4>
      <h4 style={{ color: "azure" , margin:'0.5px'}}>A DSA learner.</h4>
      <h4 style={{ color: "azure" , margin:'0.5px'}}>I know languages like HTML, CSS, Javascript, MERN Stack and git etc </h4>
      <h4 style={{ color: "azure" , margin:'0.5px'}}>I'm Also A Passionate Graphic Designer With Skills Of Figma .</h4>

      
      <h4 style={{ color: "azure" }}><span>My </span>Skills:</h4>
      <div id="skills">
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/html-5.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img class="skillicon" src={require("./pictures/css.png")} alt="." />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/java-script.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/bootstrap.png")}
            alt="."
          />
        </div>
        
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/react.png")}
            alt="."
          />
        </div>

        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/icons8-nodejs-240.png")}
            alt="."
          />
        </div>
        
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/icons8-express-js-150.png")}
            alt="."
          />
        </div>

        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/icons8-mongodb-240.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/icons8-figma-240.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/python.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img class="skillicon" src={require("./pictures/git.png")} alt="." />
        </div>
        <div class="iconblock">
          <img
            class="skillicon"
            src={require("./pictures/hierarchical-structure.png")}
            alt="."
          />
        </div>
        <div class="iconblock">
          <img class="skillicon" src={require("./pictures/c-.png")} alt="." />
        </div>
      </div>
    </div>
  );
};

export default About;
