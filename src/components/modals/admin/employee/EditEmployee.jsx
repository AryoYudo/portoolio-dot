import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Image } from 'react-bootstrap';
import '../../../../App.css';
import axios from 'axios';

const EditEmployeeModal = ({ show, handleClose, onSuccessEdit, employee }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Employee');
  const [positionList, setPositionList] = useState([]);
  const [position, setPosition] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

    useEffect(() => {
    if (show) {
        axios.get(
        'http://127.0.0.1:8000/api/master/master_position',
        {
            headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw`,
            'Content-Type': 'application/json'
            }
        }
        )
        .then((response) => {
        setPositionList(response.data.data);
        })
        .catch((error) => {
        console.error('Error fetching position list:', error);
        });
    }
    }, [show]);


    useEffect(() => {
    if (employee) {
        setName(employee.employee_name || '');
        setStatus(employee.employee_status === 'Internship' ? 'Internship' : 'Employee');
        setPosition(employee.employee_position_id || '');
        setPhotoPreview(employee.employee_picture || null);
    }
    }, [employee]);

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoPreview(URL.createObjectURL(e.target.files[0]));
      setPhotoFile(e.target.files[0]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('employee_id', employee.employee_id); // penting!
    formData.append('employee_name', name);
    formData.append('employee_status_id', status === 'Employee' ? '1' : '2');
    formData.append('employee_position_id', position);
    if (photoFile) {
      formData.append('picture', photoFile);
    }

    try {
      const result = await Swal.fire({
        title: 'Edit Employee?',
        text: 'Are you sure the entered data is correct?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, save it!',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#E31F52' // 🔴 hanya ini yang diubah
      });

      if (!result.isConfirmed) return;

      await axios.post(
        `http://127.0.0.1:8000/api/master_employee/update_employee/${employee.employee_uuid}`,
        formData,
        {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw`,
            'Content-Type': 'multipart/form-data',
          },data:{}
        }
      );
      handleClose();
      if (onSuccessEdit) onSuccessEdit();
      
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Employee has been updated successfully!',
        confirmButtonColor: '#E31F52'
      });

    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Failed to update employee. Check console for details.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="p-4">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <p className="text-muted mb-4">Update the employee information below.</p>
        <div className="text-center mb-4">
          <label htmlFor="photoUpload" style={{ cursor: 'pointer' }}>
            {photoPreview ? (
              <Image src={photoPreview} roundedCircle width={150} height={150} />
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
              placeholder="Edit Employee Name"
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
            <Form.Select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value="">-- Select Position --</option>
              {positionList.map((pos) => (
                <option key={pos.position_id} value={pos.position_id}>
                  {pos.position_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button
            type="submit"
            className="w-100 fw-bold"
            style={{ backgroundColor: '#EB2D66', border: 'none' }}
          >
            Update Employee
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditEmployeeModal;
