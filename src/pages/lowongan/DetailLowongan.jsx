import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailLowongan = () => {
  const { uuid } = useParams();
  const [job, setJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/vacancy/detail_lowongan/${uuid}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },data: {}
          }
        );

        if (res.data.status_code === 200) {
          setJob(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch job detail:", err);
      }
    };

    fetchDetail();
  }, [uuid]);

  if (!job) {
    return (
      <div className="container my-5 text-center">
        <h4>Loading job details...</h4>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <nav className="mb-3">
        <Link to="/" className="me-2 text-decoration-none text-dark">{`< Beranda`}</Link> /
        <Link to="/lowongan" className="mx-2 text-decoration-none text-dark">Join Us</Link> /
        <strong className="ms-2">{job.position_job}</strong>
      </nav>

      
      <div className="row mt-5 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6">
          <h2 className="fw-bold">{job.position_job}</h2>
          <p>{job.description}</p>
        </div>

        {/* Kanan: Gambar */}
        <div className="col-md-6 d-flex justify-content-center align-items-center p-3">
          <img
            src={job.job_picture}
            alt={job.position_job}
            className="img-fluid w-100 rounded shadow"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          className="btn text-white px-4 py-2 fw-bold"
          style={{ backgroundColor: '#E31F52', borderRadius: '10px' }}
          onClick={handleShow}
        >
          Apply Now!
        </button>
      </div>

      {/* Modal Apply */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Body className="p-5">
          <h3 className="fw-bold">Welcome, New Member!</h3>
          <p className="mb-5">Job: <strong>{job.position_job}</strong></p>
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
              <Form.Label className='small'>
                Where do you find us:<span className="text-danger">*</span>
              </Form.Label>
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