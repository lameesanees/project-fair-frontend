import React, { useContext, useEffect, useState } from "react";
import AddProject from "../Components/AddProject";
import { FaGithub } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { getAuserprojectAPI } from "../Services/allAPI";
import { addProjectResponseContext } from "../ContextAPI/ContextShare";

function MyProject() {
  const { addProjectResponse, setaddProjectResponse } = useContext(addProjectResponseContext);
  const [userProjects, setUserProjects] = useState([]);

  const getAProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      };

      const result = await getAuserprojectAPI(reqHeader);
      setUserProjects(result.data);
    }
  };

  

  useEffect(() => {
    getAProjects();
  }, [addProjectResponse]);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3 className="ms-5">My Projects</h3>
        <AddProject />
      </div>

      {/* Condition to check userProjects length */}
      {
        userProjects.length > 0 ? userProjects.map(item => (
          <div className="row m-4 p-5 shadow" key={item._id}>
            <div className="col-6">
              <h4>{item.title}</h4>
            </div>
            <div className="col-6 d-flex justify-content-evenly">
              <button className="btn">
                <a href={item.github}>
                  <FaGithub />
                </a>
              </button>
              <button className="btn">
                <MdEditSquare />
              </button>
              <button className="btn">
  <MdDelete />
</button>


            </div>
          </div>
        )) :
          <p>No projects</p>
      }
    </div>
  );
}

export default MyProject;
