import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import programmer from "../assets/programmer.webp";
import ProjectCard from "../Components/ProjectCard";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
  })
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className="text-center mt-5">PROJECT GALLERY</h1>
            <p style={{ textAlign: "justify" }} className="mx-5">
              Project Management is the application of specific knowledge,
              skills,methodologies and techniques aimed at achieveing specific
              and measurable project goals including ultimately successful
              project completion. It differs from general "management" because
              project management relates directly to the goals and time-bound
              objectives achieved within the scope of a project itself, on a
              limited timeline, rather than an ongoing one.
            </p>
            {
              isLoggedIn?
              <div className="text-center">
              <Link to={"/dashboard"}>
                <button className="btn btn-dark mt-2 mb-5">MANAGE YOUR PROJECT</button>
              </Link>
            </div>:
            <div className="text-center">
            <Link to={"/login"}>
              <button className="btn btn-dark mt-2 mb-5">GET STARTED</button>
            </Link>
          </div>
            }
          </div>
          <div className="col-md-6">
            <img src={programmer} alt="" style={{ width: "80%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{ height: "500px" }}>
            <h1 className="text-center m-5">Explore Projects</h1>
            <marquee width="100%" direction="left" height="400px">
              <div>
                <ProjectCard />
              </div>
            </marquee>
          </div>
          <div className="row">
            <h1 className="text-center m-5 mb-5  ">Our Services</h1>
            <div className="col-md-4 mb-5">
              <div className="card shadow p-5" style={{ marginLeft: "20px" }}>
                <h3 className="text-center">Data Management</h3>
                <p>
                  Our backend services specialize in efficient data handling,
                  ensuring your system maintains optimal performance and
                  scalability. From database architecture to data migration, we
                  streamline your data management processes for seamless
                  operation.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card shadow p-5" style={{ marginLeft: "0px" }}>
                <h3 className="text-center">Web Application</h3>
                <p>
                  Experience innovation with our custom web solutions tailored
                  to your needs. Our team utilizes the latest technologies to
                  craft user-friendly interfaces and scalable applications. From
                  e-commerce platforms to enterprise solutions, we deliver
                  excellence in every line of code.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card shadow p-5" style={{ marginLeft: "20px" }}>
                <h3 className="text-center">Creative Design</h3>
                <p>
                  Our web designing expertise focuses on innovative and
                  aesthetically pleasing designs that reflect your brand
                  identity. From intuitive user interfaces to visually stunning
                  graphics, we aim to elevate your online presence and leave a
                  lasting impression on your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
