import React, { useState, useEffect } from 'react';
import {
  InputGroup,
  Spinner,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
  Card,
  Row,
  Col,
} from 'react-bootstrap';
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
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/master_employee/list_master_employee',
        {
          params: { search: filterText },
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUwNjI0MjMzfQ.em9w5bSlnisTzAB88SP8inwnUD44MXF8P-3EmWlMe5I`,
            'Content-Type': 'application/json',
          },data: {}
        }
      );
      setEmployeeList(response.data.data);
    } catch (error) {
      console.error('Error fetching employee list:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [filterText]);

  const handlePhotoClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModalDetail(true);
  };

  const handleCloseModal = () => {
    setShowModalDetail(false);
    setSelectedEmployee(null);
  };

  const handleSave = () => {
    setLoading(true);
    setShowModal(false);
    fetchEmployees();
  };

  const handleEditSuccess = () => {
    setLoading(true);
    setShowModalEdit(false);
    fetchEmployees();
  };

  const handleDelete = async (uuid) => {
    if (!window.confirm('Yakin ingin menghapus data ini?')) return;
    setLoading(true);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/master_employee/delete_employee/${uuid}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUwNjI0MjMzfQ.em9w5bSlnisTzAB88SP8inwnUD44MXF8P-3EmWlMe5I`,
            'Content-Type': 'application/json',
          },data: {}
        }
      );
      fetchEmployees();
    } catch (error) {
      console.error('Gagal menghapus data:', error);
    }
  };

  const handleEdit = () => {
    setShowModalEdit(true);
    setShowModalDetail(false);
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
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </InputGroup>

              <Button
                onClick={() => setShowModal(true)}
                variant="danger"
                style={{ background: '#E31F52', borderRadius: 12 }}
              >
                + Add Employee
              </Button>
            </div>

            <AddEmployeeModal
              show={showModal}
              handleClose={() => setShowModal(false)}
              handleSave={handleSave}
              onSuccessAdd={handleSave}
            />

            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <Spinner animation="border" variant="danger" />
              </div>
            ) : (
              <Row>
                {employeeList.slice(0, showResult).map((emp) => (
                  <Col key={emp.employee_uuid} xs={6} sm={4} md={3} lg={2} className="mb-4">
                    <Card className="border-0 text-center">
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: 200,
                          borderRadius: 12,
                          overflow: 'hidden',
                          backgroundColor: '#f0f0f0',
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={
                            emp.employee_picture ||
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(emp.employee_name)}`
                          }
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                          onClick={() => handlePhotoClick(emp)}
                        />
                        {emp.employee_status === 'Internship' && (
                          <div
                            className="position-absolute bottom-0 start-0 end-0 bg-danger text-white small py-1"
                            style={{ opacity: 0.8 }}
                          >
                            <i className="bi bi-gem me-1"></i> Internship
                          </div>
                        )}
                      </div>
                      <Card.Body className="p-2">
                        <div className="fw-semibold">{emp.employee_name}</div>
                        <div className="text-muted small">{emp.employee_position}</div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}

            <EmployeeDetailModal
              show={showModalDetail}
              handleClose={handleCloseModal}
              employee={selectedEmployee}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            <EditEmployeeModal
              show={showModalEdit}
              handleClose={() => setShowModalEdit(false)}
              onSuccessEdit={handleEditSuccess}
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
                  {[6, 12, 35].map((val) => (
                    <Dropdown.Item key={val} eventKey={val}>
                      {val}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
