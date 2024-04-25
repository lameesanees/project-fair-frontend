import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { getAllProjectsAPI } from "../Services/allAPI";
function Projects() {
  const [searchKey, setSearchKey] = useState(""); //to hold search key

  const [allUsersProject, setAllUserProject] = useState([]);
  const getAllProjects = async (req, res) => {
    // get token? authenticateed
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      // set request header
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      };
      // api call
      const result = await getAllProjectsAPI(searchKey, reqHeader);
      console.log(result);
      if (result.status === 200) {
        setAllUserProject(result.data);
      } else {
        // error
        console.log(result.response.data);
      }
    }
    console.log(allUsersProject);
  };
  useEffect(() => {
    getAllProjects();
  }, [searchKey]);
  console.log(searchKey);
  return (
    <>
      <div>
        <h2 className="text-center">All Projects</h2>
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search By Technology"
          onChange={(e) => setSearchKey(e.target.value)}
          className="form-control m-5 mx-auto"
        />
        <div className="row mb-5">
          {allUsersProject.length > 0
            ? allUsersProject.map((item) => (
                <div className="col m-4">
                  <ProjectCard project={item} />
                </div>
              ))
            : "cant fetch"}
        </div>
      </div>
      
    </>
  );
}

export default Projects;
