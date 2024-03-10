/*import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
const Home=(props)=>{
    return(
        <div className="container1">
            <div >
            <img className="profilepic" src={require("./pictures/Screenshot_2024-01-20_234928-removebg-preview.png")} alt="harshita" />
            </div>
            
            <div id="home" className=" card">
                <h1>Harshita Pathak</h1>
                <p className="title">Front-end develpoer</p>
                <p style={{textDecoration:'underline', fontSize:"20px"}}>A KEEN LEARNER</p>
                <p>A passionate React developer dedicated to crafting engaging and dynamic user experiences on the web. With a keen eye for detail and a commitment to writing clean, modular code, I thrive in turning creative ideas into seamless, interactive applications.</p>
                <ul>
                    <li> <a href="https://www.linkedin.com/in/harshita-pathak-a557b6256/"  ><i className="fa fa-linkedin fa-lg" style={{padding: '5px',  maxWidth: '40%'}} ></i></a></li>
                    <li><a href="https://github.com/Harshitazz" ><i className="fa fa-github fa-lg"></i></a></li>
                </ul>
                
                <Link className="button" to={`/contact`} style={{textDecoration:'none'}}>Contact</Link> 
            </div>
           
            
            
        </div>
    );
};

export default Home;*/

import React from "react";
import "./Home.css"; // Import your CSS file for styling
import imageurl from "./pictures/1-removebg-preview.png";
import About from "./About";
import Project from "./Project";
const Home = () => {
  return (
    <div className="screen">
    
      {/* <div className="hero" style={{ backgroundImage: `url(${imageurl})` }}> */}
      <div className="hero">
      
        <div className="row row1" >
          <div className="col-lg-6 image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/eamgt0crou-202%3A230?alt=media&token=2fe83e96-648d-4ec4-abdf-b2b2923aa3f0"
              alt="Not Found"
              className="frame img-fluid"
            />
          </div>

          <div className="hero-content col-lg-6">
          <div class="sphere"></div>
            <div className="content">
              <h1 className="name">Harshita Pathak</h1>
              <p className="title">Full-Stack web develpoer</p>
              <p className="info">
                As a dedicated and passionate MERN developer, I am committed to
                crafting immersive and dynamic user experiences on the web. With
                a strong foundation in MongoDB, Express.js, React.js, and
                Node.js, I bring creativity and innovation to every project I
                undertake.
              </p>
              <div class="sphere1"></div>
              <ul>
                <li>
                  {" "}
                  <a href="https://www.linkedin.com/in/harshita-pathak-a557b6256/">
                    <i
                      className="fa fa-linkedin fa-lg"
                      style={{ padding: "5px", maxWidth: "40%" }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:pathakharshita04@gmail.com">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/Harshitazz">
                    <i className="fa fa-github fa-lg"></i>
                  </a>
                </li>
              </ul>
              <div><a href="https://heyzine.com/flip-book/610ff8e5c8.html" class="btn mt-2">
                    MY RESUME
                  </a></div>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Project/>
    </div>
  );
};

export default Home;
