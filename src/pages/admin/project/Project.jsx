import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from '../../../layouts/sidebar';
import AddProjectModal from '../../../components/modals/admin/project/AddProject';
import axios from 'axios';

const ProjectDataTable = () => {
  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSave = (formData) => {
    // Contoh: kirim ke API atau update local state
    console.log("Saved project data:", formData);
    fetchProjects();  // Refresh list setelah tambah project
  };


  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/project_list/list_data_project', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUwNjI0MjMzfQ.em9w5bSlnisTzAB88SP8inwnUD44MXF8P-3EmWlMe5I'
        },data: {}
      });
      if (response.data.status_code === 200) {
        // map data sesuai dengan struktur lokal
        const mappedData = response.data.data.map(item => ({
          id: item.project_uuid,
          title: item.title,
          description: item.short_description,
          image: item.thumbnail_project
        }));
        setData(mappedData);
      } else {
        console.error("API Error:", response.data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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

          <Button variant="light" size="sm" style={{ background: '#FAD6DD' }} >
            <i className="bi bi-trash text-danger"></i>
          </Button>
        </>
      )
    }
  ];

  const filteredItems = data.filter(
    item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="d-flex">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="flex-grow-1 mt-4">
        <div className="card shadow p-4 mx-3" style={{ borderRadius: 17 }}>
          <h2 className="fw-bold mb-3">Project List</h2>
          <div className="d-flex justify-content-between mb-2">
            <InputGroup style={{ flexGrow: 1, maxWidth: '90%' }} className="me-2">
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
              style={{ background: "#E31F52", borderRadius: 12 }} onClick={() => setShowModal(true)}
            >
              + Add Project
            </Button>
          </div>
          <DataTable 
            columns={columns} 
            data={filteredItems} 
            pagination 
            highlightOnHover 
            responsive 
            noHeader 
          />
          <AddProjectModal
            show={showModal}
            handleClose={() => setShowModal(false)}
            handleSave={handleSave}  // handleSave menerima FormData atau object
          />

        </div>
      </div>
    </div>
  );
};

export default ProjectDataTable;
