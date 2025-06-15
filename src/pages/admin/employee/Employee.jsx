import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button, Dropdown, DropdownButton, Card, Row, Col } from 'react-bootstrap';
import Sidebar from '../../../layouts/sidebar';
import AddEmployeeModal from '../../../components/modals/admin/employee/AddEmployeeModal';
import EmployeeDetailModal from '../../../components/modals/admin/employee/DetailEmployee';
import EditEmployeeModal from '../../../components/modals/admin/employee/EditEmployee';
import axios from 'axios';

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [showResult, setShowResult] = useState(12);
  const [showModal, setShowModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSave = (data) => {
    console.log('Employee saved:', data);
    fetchEmployees(); // refresh list habis nambah data
  };

  // Ambil data dari API
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/master_employee/list_master_employee', {
        params: { search: filterText } // search filter masuk ke query param
      });
      setEmployeeList(response.data.data);
    } catch (error) {
      console.error('Error fetching employee list:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [filterText]); // re-fetch saat filterText berubah

  const handlePhotoClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModalDetail(true);
  };

  const handleCloseModal = () => {
    setShowModalDetail(false);
    setSelectedEmployee(null);
  };

  const handleEdit = () => {
    alert(`Edit ${selectedEmployee.employee_name}`);
    setShowModalEdit(true);
    setShowModalDetail(false);
  };

  const handleDelete = () => {
    alert(`Delete ${selectedEmployee.name}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        <div className="col mt-5">
          <div className="p-4 rounded-4 card shadow">
            <h2 className="fw-bold mb-3">Employee</h2>

            <div className="d-flex justify-content-between mb-3">
              <InputGroup style={{ flexGrow: 1, maxWidth: '85%' }} className="me-2">
                <InputGroup.Text style={{ background: '#f0f0f0', borderRight: 'none' }}>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <FormControl
                  style={{ background: '#f0f0f0', borderLeft: 'none' }}
                  placeholder="Search by name, etc."
                  value={filterText}
                  onChange={e => setFilterText(e.target.value)}
                />
              </InputGroup>

              <Button  
                onClick={() => setShowModal(true)}
                variant="danger"
                style={{ background: "#E31F52", borderRadius: 12 }}
              >
                + Add Employee
              </Button>
              <AddEmployeeModal show={showModal} handleClose={() => setShowModal(false)} handleSave={handleSave}  onSuccessAdd={handleSave}  />
            </div>

            <Row>
              {employeeList.slice(0, showResult).map(emp => (
                <Col key={emp.employee_uuid} xs={6} sm={4} md={3} lg={2} className="mb-4 position-relative">
                  <Card className="border-0 text-center" style={{ position: 'relative' }}>
                    <div style={{ 
                      position: 'relative',
                      width: '100%',
                      height: 200, // ✅ tinggi tetap, bisa disesuaikan
                      borderRadius: 12,
                      overflow: 'hidden',
                      backgroundColor: '#f0f0f0' // fallback kalau gambar kosong
                    }}>
                      <Card.Img
                        variant="top"
                        src={emp.employee_picture || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(emp.employee_name)}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover', // ✅ ini bikin proporsional
                          objectPosition: 'center' // fokus tengah
                        }}
                        onClick={() => handlePhotoClick(emp)}
                      />

                      {emp.employee_status === 'Internship' && (
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: '#E31F528C',
                          color: 'white',
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          padding: '4px 0',
                          fontSize: '0.75rem'
                        }}>
                          <i className="bi bi-gem me-1"></i> Internship
                        </div>
                      )}
                    </div>

                    <Card.Body className="p-2">
                      <div className="fw-semibold">{emp.employee_name}</div>
                      <div className="text-muted" style={{ fontSize: '0.9rem' }}>{emp.employee_position}</div>
                    </Card.Body>
                  </Card>

                </Col>
              ))}
            </Row>

            {/* Modal cukup render satu kali di luar map */}
            <EmployeeDetailModal show={showModalDetail} handleClose={handleCloseModal} employee={selectedEmployee} handleEdit={handleEdit} handleDelete={handleDelete} />
            <EditEmployeeModal
              show={showModalEdit}
              handleClose={() => setShowModalEdit(false)}
              onSuccessEdit={fetchEmployees}
              employee={selectedEmployee}
            />



            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="d-flex align-items-center">
                Show result:&nbsp;
                <DropdownButton
                  title={showResult}
                  size="sm"
                  variant="light"
                  onSelect={(e) => setShowResult(Number(e))}
                >
                  <Dropdown.Item eventKey="6">6</Dropdown.Item>
                  <Dropdown.Item eventKey="12">12</Dropdown.Item>
                  <Dropdown.Item eventKey="24">24</Dropdown.Item>
                </DropdownButton>
              </div>

              <div>
                <Button variant="light" size="sm">{'<'}</Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="mx-1"
                  style={{ background: "#FAD6DD", border: 'none', color: '#E31F52' }}
                >
                  2
                </Button>
                <Button variant="light" size="sm">{'>'}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
