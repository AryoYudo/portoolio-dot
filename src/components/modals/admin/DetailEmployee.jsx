import React from 'react';
import { Modal, Button, Image, Badge } from 'react-bootstrap';

const EmployeeDetailModal = ({ show, handleClose, employee, handleEdit, handleDelete }) => {
  console.log('Employee Detail:', employee);
  if (!employee) return null;
  
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="md"
    >
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Detail Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Image
          src={employee.employee_picture}
          rounded
          style={{ width: 150, height: 150, objectFit: 'cover' }}
          className="mb-3"
        />

        <div>
          <Badge bg="light" text="dark" style={{ backgroundColor: '#FDCEDF', color: '#EB2D66' }}>
            {employee.status}
          </Badge>
        </div>

        <h5 className="fw-bold mt-3 mb-1">{employee.employee_name}</h5>
        <div className="text-muted mb-4">{employee.employee_position}</div>

        <div className="d-flex justify-content-center gap-2">
          <Button
            variant="outline-dark"
            onClick={handleEdit}
          >
            <i className="bi bi-pencil-square me-1"></i>
            Edit Profile
          </Button>
          <Button
            variant="outline-danger"
            onClick={handleDelete}
          >
            <i className="bi bi-trash3 me-1"></i>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EmployeeDetailModal;
