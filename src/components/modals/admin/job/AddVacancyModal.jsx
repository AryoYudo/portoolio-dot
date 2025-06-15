import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const AddVacancyModal = ({ show, handleClose, handleSave }) => {
  const [positionJob, setPositionJob] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');
  const [statusId, setStatusId] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format tanggal
    const dateParts = availableUntil.split('-'); // [2025, 06, 28]
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; // 28-06-2025

    const formData = new FormData();
    formData.append('position_job', positionJob);
    formData.append('short_description', shortDescription);
    formData.append('available_until', formattedDate);
    formData.append('status_id', statusId);
    formData.append('picture', picture);
    formData.append('description', description);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/job_vacancy/add_job',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUwNjI0MjMzfQ.em9w5bSlnisTzAB88SP8inwnUD44MXF8P-3EmWlMe5I'
          },
        }
      );
      console.log('Success:', response.data);
      alert('Vacancy added successfully!');
      handleClose();
      handleSave();
    } catch (error) {
      console.error('Error adding vacancy:', error);
      alert('Failed to add vacancy!');
    }
  };


  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Vacancy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please provide correct and complete information in the fields below.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Input Event Title"
              value={positionJob}
              onChange={(e) => setPositionJob(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Short Description (Max. 30) *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Input Short Description"
              maxLength="30"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Available Until *</Form.Label>
            <Form.Control
              type="date"
              value={availableUntil}
              onChange={(e) => setAvailableUntil(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category *</Form.Label>
            <Form.Select
              value={statusId}
              onChange={(e) => setStatusId(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="1">Employee</option>
              <option value="2">Internship</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Input Content"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button style={{ background: "#E31F52",}} type="submit" className="w-100">
            Add Vacancy
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddVacancyModal;
