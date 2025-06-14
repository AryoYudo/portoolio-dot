import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Dropdown, DropdownButton, Card, Row, Col } from 'react-bootstrap';

const employees = [
  {
    id: 1,
    name: 'Celine Natasha',
    position: 'UI/UX Designer',
    type: 'Internship',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 2,
    name: 'Alya Putri',
    position: 'Project Manager',
    type: '',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Achmad Budi Cahyono',
    position: 'Mobile Developer',
    type: '',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  // ... tambahkan data lain sesuai gambar
];

const EmployeeList = () => {
  const [filterText, setFilterText] = useState('');
  const [showResult, setShowResult] = useState(12);

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="p-4 card shadow">
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
          variant="danger"
          style={{ background: "#E31F52", borderRadius: 12 }}
        >
          + Add Employee
        </Button>
      </div>

      <Row>
        {filteredEmployees.slice(0, showResult).map(emp => (
          <Col key={emp.id} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <Card className="border-0 text-center">
              <Card.Img variant="top" src={emp.image} style={{ borderRadius: 12 }} />
              {emp.type === 'Internship' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: '#B487F8',
                  color: 'white',
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  padding: '2px 0',
                  fontSize: '0.75rem'
                }}>
                  <i className="bi bi-gem me-1"></i> Internship
                </div>
              )}
              <Card.Body className="p-2">
                <div className="fw-semibold">{emp.name}</div>
                <div className="text-muted" style={{ fontSize: '0.9rem' }}>{emp.position}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

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
          {/* Contoh pagination statis, bisa diubah jadi dynamic */}
          <Button variant="light" size="sm">{'<'}</Button>
          <Button variant="danger" size="sm" className="mx-1" style={{ background: "#FAD6DD", border: 'none', color: '#E31F52' }}>2</Button>
          <Button variant="light" size="sm">{'>'}</Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
