import React from "react";
import image from "../../assets/me2.jpg";

import "./About.css";
import "../../App.css";

const About = () => {
  return (
    <>
      <div className="col-md-6 p-5">
        <div className="card-border-about">
          <div className="row">
            <div className="col-md-6 text-center p-1">
              <img className="about-image img-fluid" src={image} alt={"Me"} />
            </div>
            <div className="col-md-6">
              <div className="row m-4">
                <ul>
                  <li className="about-text text-personal">
                    Software Developer
                  </li>
                  <li className="about-text text-personal mt-2">
                    Software Engenireeing
                  </li>
                  <li className="about-text text-personal mt-2">
                    Software Engenireeing
                  </li>
                  <li className="about-text text-personal mt-2">
                    Software Engenireeing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-5">
        <div className="card-border-about">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center p-4">
              <ul>
                <li className="about-text text-objective">
                  Technology lover and eager to learn more and more to create
                  systems to make our lives easier.
                </li>
                <hr className="line" />
                <li className="about-text text-objective">
                  Technology lover and eager to learn more and more to create
                  systems to make our lives easier.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
