import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className='btn text-dark m-5' onClick={handleShow}>Add</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <label>
                <input type="file" style={{ display: 'none' }} />
                <img src="https://user-images.githubusercontent.com/69011963/137184767-79a13ec7-1bb3-4341-a6da-3a149c9c159a.gif"
                  alt="" className='img-fluid mb-2' style={{ width: "100%",height:'300px' }} />
              </label>
            </div>
            <div className='col-6'>
              <input type="text" placeholder='Project Title' className='form-control mb-3' />
              <input type="text" placeholder='Language Used' className='form-control mb-3' />
              <input type="text" placeholder='Github Link' className='form-control mb-3' />
              <input type="text" placeholder='Project Title' className='form-control mb-3' />
              <input type="text" placeholder='Overview' className='form-control mb-3' />
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer className=''>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
