import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditVacancyModal = ({ show, handleClose, vacancy }) => {
  const token = localStorage.getItem('accessToken');
  const [positionJob, setPositionJob] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');
  const [statusId, setStatusId] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    if (vacancy) {
      setPositionJob(vacancy.position_job || '');
      setShortDescription(vacancy.short_description || '');
      setDescription(vacancy.description || '');
      setStatusId(vacancy.status_id || '');
      setPicture(vacancy.job_picture || '');
      
      if (vacancy.available_until) {
        // Ubah 28-06-2025 jadi 2025-06-28 untuk input date
        const parts = vacancy.available_until.split('-'); 
        setAvailableUntil(`${parts[2]}-${parts[1]}-${parts[0]}`);
      }
    }
  }, [vacancy]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format date jadi dd-mm-yyyy
    const dateParts = availableUntil.split('-'); 
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

    const formData = new FormData();
    formData.append('position_job', positionJob);
    formData.append('short_description', shortDescription);
    formData.append('available_until', formattedDate);
    formData.append('status_id', statusId);
    formData.append('description', description);
    if (picture) formData.append('picture', picture);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/job_vacancy/update_job/${vacancy.job_uuid}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          },data:{}
        }
      );
      console.log('Success:', response.data);
      alert('Vacancy updated successfully!');
      handleClose();
    } catch (error) {
      console.error('Error updating vacancy:', error);
      alert('Failed to update vacancy!');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Vacancy</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              value={positionJob}
              onChange={(e) => setPositionJob(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Short Description (Max. 30) *</Form.Label>
            <Form.Control
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              maxLength={30}
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
            <Form.Control
              type="text"
              value={statusId}
              onChange={(e) => setStatusId(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update Vacancy
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditVacancyModal;
