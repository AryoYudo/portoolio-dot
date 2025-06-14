import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { color } from 'framer-motion';
import { InputGroup, FormControl } from 'react-bootstrap';
import Sidebar from '../../../layouts/sidebar';


const data = [
  {
    id: 1,
    title: "Development of a Smart Parking System",
    description: "based on IoT for Urban Area Optimization",
    image: "job.png"
  },
  {
    id: 2,
    title: "IoT Integration in Manufacturing",
    description: "to Improve Efficiency and Reduce Operational Costs",
    image: "job.png"
  },
  {
    id: 3,
    title: "Development of an AI Chatbot",
    description: "as a Virtual Assistant for E-Commerce Customer Service",
    image: "job.png"
  },
  {
    id: 4,
    title: "Building a Local Marketplace Website",
    description: "with a Customized Checkout Experience",
    image: "job.png"
  },
  {
    id: 5,
    title: "Mobile Learning Application",
    description: "with AI-Powered Quiz Recommendations",
    image: "job.png"
  }
];

const columns = [
  {
    name: 'Project',
    selector: row => row.title,
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center">
        <img
          src={row.image}
          alt={row.title}
          style={{ width: 190, height: 110, objectFit: 'cover', borderRadius: 8 }}
          className="mb-3 me-4"
        />
        <div>
          <div className="fw-bold">{row.title}</div>
          <div style={{ fontSize: '0.9rem', color: 'gray' }}>{row.description}</div>
        </div>
      </div>
    )
  },
  {
    name: 'Actions',
    button: true,
    cell: row => (
      <>
        <Button variant="light" size="sm" className="me-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" size="sm">
          <i className="bi bi-trash"></i>
        </Button>
      </>
    )
  }
];

const ProjectDataTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = data.filter(
    item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
  <div className="d-flex">
    <div className="col-md-2">
      <Sidebar />
    </div>
    <div className="flex-grow-1 mt-4">
      <div className="card shadow p-3 mx-3" style={{ borderRadius: 17 }}>
        <h2 className="fw-bold mb-3">Project List</h2>
        <div className="d-flex justify-content-between mb-2">
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
            + Add Project
          </Button>
        </div>
        <DataTable columns={columns} data={filteredItems} pagination highlightOnHover responsive noHeader />
      </div>
    </div>
  </div>

  );
};

export default ProjectDataTable;
