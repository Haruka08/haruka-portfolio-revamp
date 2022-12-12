import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    // <div>
    //     <form>
    //       <div className="mb-3">
    //           <label for="nameInput" className="form-label">Name</label>
    //           <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp"/>
    //       </div>
    //       <div className="mb-3">
    //           <label for="exampleInputEmail1" className="form-label">Email address</label>
    //           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    //       </div>
    //       <div className="mb-3">
    //           <label for="exampleFormControlTextarea1" className="form-label">Message</label>
    //           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    //       </div>
    //       <button type="submit" className="btn btn-primary">Submit</button>
    //     </form>
    // </div>

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" />
      <Form.Text className="text-muted">
        We'll never share your information with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Message</Form.Label>
      <Form.Control type="text" placeholder="Type your message here" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
);
}