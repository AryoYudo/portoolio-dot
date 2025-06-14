import React, { useState } from 'react';
import { Modal, Button, Form, Image } from 'react-bootstrap';
import '../../../App.css';

const AddEmployeeModal = ({ show, handleClose, handleSave }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Employee');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSave({ name, status, position, photo });
    setName('');
    setStatus('Employee');
    setPosition('');
    setPhoto(null);
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"  // Membuat modal lebih lebar
      className='p-4'
    >
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <p className="text-muted mb-4">Please provide correct and complete information in the fields below.</p>
        <div className="text-center mb-4">
          <label htmlFor="photoUpload" style={{ cursor: 'pointer' }}>
            {photo ? (
              <Image src={photo} roundedCircle width={150} height={150} />
            ) : (
              <div
                className="d-flex justify-content-center align-items-center bg-light"
                style={{ width: 150, height: 150, borderRadius: '50%' }}
              >
                <i className="bi bi-camera" style={{ fontSize: '2.5rem', color: '#999' }}></i>
              </div>
            )}
          </label>
          <input
            type="file"
            id="photoUpload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handlePhotoChange}
          />
          <div className="small text-muted mt-2">Click to Change Photo</div>
        </div>

        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Employee Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status <span className="text-danger">*</span></Form.Label>
            <div className="custom-radio">
            <Form.Check
                inline
                label="Employee"
                type="radio"
                id="employee"
                checked={status === 'Employee'}
                onChange={() => setStatus('Employee')}
            />
            <Form.Check
                inline
                label="Internship"
                type="radio"
                id="internship"
                checked={status === 'Internship'}
                onChange={() => setStatus('Internship')}
            />
            </div>

          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Position <span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Employee Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 fw-bold"
            style={{ backgroundColor: '#EB2D66', border: 'none' }}
          >
            Add Employee
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEmployeeModal;
