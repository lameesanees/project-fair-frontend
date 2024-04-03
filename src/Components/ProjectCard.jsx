import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/012/794/016/original/3d-illustration-of-add-image-on-ui-design-view-png.png"
          style={{ height: '250px' }} />
        <Card.Body>
          <Card.Title className='text-center' style={{ fontSize: "x-larger" }}>Project Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className="col-6">
              <img width={'100%'} src="https://static.vecteezy.com/system/resources/previews/012/794/016/original/3d-illustration-of-add-image-on-ui-design-view-png.png" alt="" />
            </div>
            <div className="col-6 text-center">
              <h2>
                Project Title
              </h2>
              <p style={{ textAlign: "justify" }}><b>Description:</b> There are many variations of passages
                of Lorem Ipsum available on the Internet.<br />
                <b>Technologies Used:</b> React, Node</p>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button>
              <a href="" className='text-white'><FaGithub /> </a>
            </Button> &nbsp;
            <Button>
              <a href="" className='text-white'><FaLink /></a>
            </Button>
            &nbsp;
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard
