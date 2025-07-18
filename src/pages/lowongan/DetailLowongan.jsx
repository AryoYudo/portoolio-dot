import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Col, Form, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const DetailLowongan = () => {
  const { uuid } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    whatsapp_number: '',
    cv_file: null
  });

  const fadeInUp = (delay = 0) => ({
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay },
      viewport: { once: true, amount: 0.3 },
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('job_id', job.job_id);
    payload.append('user_name', formData.user_name);
    payload.append('email', formData.email);
    payload.append('whatsapp_number', formData.whatsapp_number);
    payload.append('cv_file', formData.cv_file);
    payload.append('source', formData.source);

    try {
      const result = await Swal.fire({
        title: 'Submit Application?',
        text: 'Are you sure the data entered is correct?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, submit!',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#E31F52' // sesuai gaya kamu
      });

      if (!result.isConfirmed) return;

      const response = await axios.post(
        'http://127.0.0.1:8000/api/vacancy/applicants',
        payload
      );

      if (response.data.status_code === 200) {
        await Swal.fire('Success!', 'Successfully applied.', 'success');
        navigate('/user/lowongan');
      } else {
        await Swal.fire('Failed', 'Submission failed. Please try again.', 'error');
      }

    } catch (err) {
      console.error('Error submitting application:', err);
      await Swal.fire('Error', 'There was an error submitting the form.', 'error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv_file: e.target.files[0] });
  };

  if (!job) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100"><Spinner animation="border" variant="danger" /></div>
    );
  }

  return (
    <div className="container my-5">
      <nav className="mb-3">
        <Link to="/" className="me-2 text-decoration-none text-dark">{`< Beranda`}</Link> /
        <Link to="/user/lowongan" className="mx-2 text-decoration-none text-dark">Join Us</Link> /
        <strong className="ms-2">{job.position_job}</strong>
      </nav>

      
      <div className="row mt-5 align-items-center flex-column-reverse flex-md-row">
        {/* Kiri: Deskripsi & Judul */}
          <motion.h2 className="fw-bold mb-4" {...fadeInUp(0.3)}>
            {job.position_job}
          </motion.h2>
        <motion.div
          className="col-md-6 text-center text-md-start"
          {...fadeInUp(0.2)}
        >
          <motion.div {...fadeInUp(0.4)}>
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </motion.div>
        </motion.div>

        {/* Kanan: Gambar */}
        <motion.div
          className="col-md-6 d-flex justify-content-center align-items-center p-3"
          {...fadeInUp(0.5)}
        >
          <img
            src={job.job_picture}
            alt={job.position_job}
            className="img-fluid w-100 rounded shadow"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </motion.div>
      </div>

      {/* Tombol Apply */}
      <motion.div
        className="text-center mt-4"
        {...fadeInUp(0.6)}
      >
        <button
          className="btn text-white px-4 py-2 fw-bold"
          style={{ backgroundColor: '#E31F52', borderRadius: '10px' }}
          onClick={handleShow}
        >
          Apply Now!
        </button>
      </motion.div>

      {/* Modal Apply */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Body className="p-5">
          <h3 className="fw-bold">Welcome, New Member!</h3>
          <p className="mb-5">Job: <strong>{job.position_job}</strong></p>
          <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className='small'>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Insert Name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className='small'>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Insert Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className='small'>WhatsApp Number</Form.Label>
                <Form.Control
                  type="text"
                  name="whatsapp_number"
                  placeholder="Insert WhatsApp Number"
                  value={formData.whatsapp_number}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className='small'>Upload CV (PDF)</Form.Label>
                <Form.Control
                  type="file"
                  name="cv_file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-end gap-3">
                <Button variant="outline-danger" onClick={handleClose}>Cancel</Button>
                <Button variant="danger" type="submit">Send</Button>
              </div>
            </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetailLowongan;