import React from "react";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  let {title ,description,number,imageurl,githuburl,tech}=props;
  return (
    <>
      <div className="card-wrapper">
        <div id="card-2" className="card1 card-rotating text-center">
          <div className="face front">
          <div class=" extra" style={{backgroundImage:`url(${imageurl})`,backgroundSize:'cover',backgroundPosition:'center center no-repeat'}}>
              <div class="card-category">{number}</div>
              <div class="card-description ">
                <h2 >{title}</h2>
              </div>
            </div>
          </div>

          <div className="face back">
            <div className="content text-center">
              <h4 className="card-title font-weight-bold my-4">
                {title}
                
              </h4>

              
              <h5 className="font-weight my-4">{description}</h5>
              <h5 className="font-weight my-4">{tech}</h5>

              <ul className="list-unstyled list-inline d-flex justify-content-center flex-wrap mt-4">
              
                <li className="button" style={{position:'absolute',bottom:'2px' ,width:'15rem'}}><a href={githuburl} style={{color:'white'}} >VIEW CODE</a></li>

              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
