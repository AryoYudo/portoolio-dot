import React, { useState, useEffect } from 'react'; // tambahin useEffect di sini
import { Modal, Button, Form, Image } from 'react-bootstrap';
import '../../../../App.css';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddEmployeeModal = ({ show, handleClose, onSuccessAdd }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Employee'); // 'Employee' atau 'Internship'
  const [positionList, setPositionList] = useState([]);
  const [position, setPosition] = useState(''); // ✅ tambahin ini
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  useEffect(() => {
    if (show) {
      axios.get('http://127.0.0.1:8000/api/master/master_position', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw',
          'Content-Type': 'application/json',
        },data: {}
      })
      .then((response) => {
        setPositionList(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching position list:', error);
      });
    }
  }, [show]);



  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoPreview(URL.createObjectURL(e.target.files[0]));
      setPhotoFile(e.target.files[0]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('employee_name', name);
    formData.append('employee_status_id', status === 'Employee' ? '1' : '2');
    formData.append('employee_position_id', position);
    if (photoFile) {
      formData.append('picture', photoFile);
    }

    try {
      const result = await Swal.fire({
        title: 'Add New Employee?',
        text: 'Are you sure the entered data is correct?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, save it!',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#E31F52' // 🔴 hanya ini yang diubah
      });

      if (!result.isConfirmed) return;

      await axios.post(
        'http://127.0.0.1:8000/api/master_employee/add_master_employee',
        formData,
        {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Reset form setelah berhasil
      setName('');
      setStatus('Employee');
      setPosition('');
      setPhotoPreview(null);
      setPhotoFile(null);
      handleClose();
      if (onSuccessAdd) onSuccessAdd();

      await Swal.fire('Success!', 'Employee has been added.', 'success');

    } catch (error) {
      console.error('Error saving employee:', error);
      await Swal.fire('Error', 'Failed to add employee. Please check the console.', 'error');
    }
  };


  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="p-4"
    >
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <p className="text-muted mb-4">
          Please provide correct and complete information in the fields below.
        </p>
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
            <Form.Label>
              Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Employee Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Status <span className="text-danger">*</span>
            </Form.Label>
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
            <Form.Label>
              Position <span className="text-danger">*</span>
            </Form.Label>
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
            Add Employee
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEmployeeModal;
