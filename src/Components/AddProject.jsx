import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { addProjectAPI } from "../Services/allAPI";
import { addProjectAPI } from "../Services/allAPI"
import Swal from "sweetalert2";

function AddProject() {
  const [preview, setPreview] = useState("");
  const [fileStatus, setFileStatus] = useState(false);
  const [projectData, setProjectData] = useState({
    title: "",
    language: "",
    github: "",
    livelink: "",
    overview: "",
    projectImage: "",
  });
  console.log(projectData);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // console.log(projectData.projectImage.type);
    if (
      projectData.projectImage.type == "image/png" ||
      projectData.projectImage.type == "image/jpeg" ||
      projectData.projectImage.type == "image/jpg"
    ) {
      console.log("generate image url:");
      // file to url conversion
      console.log(URL.createObjectURL(projectData.projectImage));
      setPreview(URL.createObjectURL(projectData.projectImage));
      setFileStatus(false);
    } else {
      setFileStatus(true);

      console.log(
        "please upload following image extension in png,jpeg and jpg formats"
      );
    }
  }, [projectData.projectImage]);

  // add project button working
  const handleAddProject = async () => {
    // data passing
    const { title, language, github, livelink, overview, projectImage } =
      projectData;
    if (
      !title ||
      !language ||
      !github ||
      !livelink ||
      !overview ||
      !projectImage
    )
      Swal.fire("Please fill the details!");
    else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("livelink", livelink);
      reqBody.append("overview", overview);
      reqBody.append("projectImage", projectImage);

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        // api call
        const result = await addProjectAPI(reqBody, reqHeader);
        console.log(result);
        if (result.status == 200) 
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your project has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        else {
          alert(result.response.data);
        }
      }
    }
  };

  // to hold token
  const [token, setToken] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  return (
    <div>
      <button className="btn text-dark m-5" onClick={handleShow}>
        Add
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <label>
                <input
                  type="file"
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      projectImage: e.target.files[0],
                    })
                  }
                  style={{ display: "none" }}
                />
                <img
                  src={
                    preview
                      ? preview
                      : "https://user-images.githubusercontent.com/69011963/137184767-79a13ec7-1bb3-4341-a6da-3a149c9c159a.gif"
                  }
                  alt=""
                  className="img-fluid mb-2"
                  style={{ width: "100%", height: "300px" }}
                />
              </label>
              {fileStatus && (
                <p className="text-danger">
                  "please upload following image extension in png,jpeg and jpg
                  formats only"
                </p>
              )}
            </div>
            <div className="col-6">
              <input
                type="text"
                onChange={(e) =>
                  setProjectData({ ...projectData, title: e.target.value })
                }
                placeholder="Project Title"
                className="form-control mb-3"
              />
              <input
                type="text"
                onChange={(e) =>
                  setProjectData({ ...projectData, language: e.target.value })
                }
                placeholder="Language Used"
                className="form-control mb-3"
              />
              <input
                type="text"
                onChange={(e) =>
                  setProjectData({ ...projectData, github: e.target.value })
                }
                placeholder="Github Link"
                className="form-control mb-3"
              />
              <input
                type="text"
                onChange={(e) =>
                  setProjectData({ ...projectData, livelink: e.target.value })
                }
                placeholder="Project Title"
                className="form-control mb-3"
              />
              <input
                type="text"
                onChange={(e) =>
                  setProjectData({ ...projectData, overview: e.target.value })
                }
                placeholder="Overview"
                className="form-control mb-3"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddProject} variant="secondary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProject;
