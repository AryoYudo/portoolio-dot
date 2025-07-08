import React from 'react';
import { Modal, Button, Image, Badge } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const EmployeeDetailModal = ({ show, handleClose, employee, handleEdit, handleDelete }) => {
  const token = localStorage.getItem('accessToken');
  if (!employee) return null;
  
  const onDeleteClick = async () => {

    const result = await Swal.fire({
      title: 'Delete Employee?',
      text: `Are you sure you want to delete ${employee.employee_name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#E31F52' // 🔴 hanya ini yang diubah
    });

    if (!result.isConfirmed) return;

    try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/master_employee/delete_employee/${employee.employee_uuid}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },data:{}
          }
        );

        if (response.data.messagetype === 'S') {
          // ✅ Tampilkan SweetAlert sukses
          await Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Employee has been deleted successfully.',
            confirmButtonColor: '#E31F52'
          });

          // Lanjutkan proses delete di UI
          handleDelete(employee.employee_uuid);
          handleClose();
      } else {
        alert(`Failed to delete employee. Message: ${response.data?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Detail Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Image
          src={employee.employee_picture || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(employee.employee_name)}
          style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 12 }}
          className="mb-3"
        />

        <div>
            {employee.employee_status === 'Internship' && (
              <div style={{ backgroundColor: '#E31F528C', color: 'white', fontSize: '0.75rem', padding: '4px 12px', marginTop: 10, borderRadius: 8, width: 'fit-content', display: 'inline-flex', }} >
                <i className="bi bi-gem me-1"></i> {employee.employee_status}
              </div>
            )}
        </div>

        <h3 className="fw-bold mt-2 mb-1">{employee.employee_name}</h3>
        <h5 className="text-muted mb-4">{employee.employee_position}</h5>

        <div className="d-flex justify-content-center gap-3">

          <Button variant="outline-dark" onClick={handleEdit} >
            <i className="bi bi-pencil-square me-2"></i>
            Edit Profile
          </Button>

          <Button variant="outline-danger" onClick={onDeleteClick} >
            <i className="bi bi-trash3 me-1"></i>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EmployeeDetailModal;
