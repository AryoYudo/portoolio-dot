import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

const DetailLowongan = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="container my-5">
      <nav className="mb-3">
        <span className="me-2 text-muted">{`< Back`}</span>
        <span className="me-2">Beranda</span> /
        <span className="mx-2">Join Us</span> /
        <strong className="ms-2">System Support</strong>
      </nav>

        <div className="col-md-12 mt-5">
        <div className="row g-2">
            <div className="col-12">
            <img src="/job.png" className="img-fluid rounded w-100" alt="Job" />
            </div>
        </div>
        </div>

      <h2 className="fw-bold mt-2 text-center">System Support</h2>

      <div className="row mt-3">
        <div className="col-md-12">
          <h3 className="fw-bold">Job Desk</h3>
          <p className="fw-semibold mt-2">Job Overview :</p>
          <p >
            The System Support I role provides entry-level technical support to end-users and assists in the
            maintenance and troubleshooting of IT systems.
            This position is responsible for resolving hardware, software, and network issues under the
            supervision of senior technical staff. The role includes direct interaction with users, documentation,
            and escalating unresolved issues when necessary.
          </p>

          <p className="fw-semibold mt-3">Key Responsibilities:</p>
          <ul>
            <li>Technical Support</li>
            <li>System Maintenance</li>
            <li>User Assistance</li>
            <li>Documentation</li>
            <li>Hardware & Software Management</li>
            <li>Monitoring</li>
          </ul>

          <p className="fw-semibold mt-3">Job Specification:</p>
          <p>
            Minimal Education: SMK with a major in IT or Electronics, or a Diploma. 
            Experience: Fresh Graduates are welcome 
            Skill:
          </p>
          <ul>
            <li>Basic understanding of computer systems, networks, and software.</li>
            <li>Strong problem-solving and troubleshooting skills.</li>
            <li>Excellent communication and customer service abilities.</li>
            <li>Familiarity with operating systems (Windows, Linux, macOS).</li>
            <li>Knowledge of basic networking concepts (IP, DNS, DHCP) is a plus.</li>
          </ul>
        </div>

        
      </div>

      <div className="text-center mt-4">
        <button className="btn text-white px-4 py-2 fw-bold" style={{ backgroundColor: '#E31F52', borderRadius: '10px' }} onClick={handleShow}>
          Apply Now!
        </button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Body className="p-5">
          <h3 className="fw-bold">Welcome, New Member!</h3>
          <p className="mb-5">Job: <strong>System Support 1</strong></p>
          <Form>
            <Form.Group className="mb-3">
                <Form.Label className='small'>Name</Form.Label>
                <Form.Control type="text" placeholder="Insert Name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='small'>Email</Form.Label>
                <Form.Control type="email" placeholder="Insert Email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='small'>WhatsApp Number</Form.Label>
                <Form.Control type="text" placeholder="Insert WhatsApp Number" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='small'>Upload CV (PDF)</Form.Label>
                <Form.Control type="file" accept=".pdf" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='small'>Where do you find us:<span className="text-danger">*</span></Form.Label>
              <div>
                <Form.Check inline label="Instagram" name="source" type="radio" />
                <Form.Check inline label="Friends" name="source" type="radio" />
                <Form.Check inline label="Other" name="source" type="radio" />
              </div>
            </Form.Group>
            <div className="d-flex justify-content-end gap-3">
              <Button variant="outline-danger" onClick={handleClose}>Cancel</Button>
              <Button variant="danger">Send</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetailLowongan;
