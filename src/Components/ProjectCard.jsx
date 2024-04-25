import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
function ProjectCard({ project }) {
  // console.log(project);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "23rem" }} onClick={handleShow}>
        <Card.Img
          variant="top"
          src={project.projectImage}
          style={{ height: "250px" }}
        />
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: "x-larger" }}>
            {project.title}
          </Card.Title>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className=" col-6">
              <img
                className="w-100 img-fluid"
                src={project.projectImage}
              />
            </div>
            <div className="col-6 text-center">
              <h3>{project.title}</h3>
              <p style={{ textAlign: "justify" }}>
                <b>Description: </b> {project.overview}
                <br />
                <b>Technology: </b>
                {project.language}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button>
              <a
                href={project.github}
                target="_blank"
                rel="norefferrer"
                className="text-white"
              >
                <span className="sr-only">{project.github}</span>
                <FaGithub />
              </a>
            </Button>
            &nbsp;
            <Button>
              <a
                href={project.livelink}
                target="_blank"
                rel="norefferrer"
                className="text-white"
              >
                <span className="sr-only">{project.livelink}</span>
                <FaLink />
              </a>
            </Button>
            &nbsp;
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectCard;
