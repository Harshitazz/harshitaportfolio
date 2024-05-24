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
      <p className="aboutcontent">I am well-versed in web development languages such as HTML, CSS, and JavaScript, along with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack.</p>
      <p className="aboutcontent">Additionally, I possess proficiency in both C++ and Python, as well as a strong foundation in data structures and algorithms (DSA).  </p>
      <p className="aboutcontent">My knowledge extends to version control systems like Git. Moreover, I am a skilled graphic designer with a passion for creating visually appealing designs, utilizing tools like Figma to bring concepts to life.</p>
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
