import React, {useState} from "react"
import {Modal, Button, Form, InputGroup, FormControl} from "react-bootstrap"
import FetchingTheComments from "./FetchingTheComments"

 const Example = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Add Comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comment Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <h4>Email</h4>
            <Form.Control as="textarea" rows={1} />
            <br />
            <h4>Comment</h4>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" >
          <FetchingTheComments />
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example