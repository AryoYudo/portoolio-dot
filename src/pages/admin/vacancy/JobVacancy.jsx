import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Spinner, InputGroup, FormControl } from 'react-bootstrap';
import Sidebar from '../../../layouts/sidebar';
import AddVacancyModal from '../../../components/modals/admin/job/AddVacancyModal';
import EditVacancyModal from '../../../components/modals/admin/job/EditVacancyModal';
import axios from 'axios';

const JobVacancy = () => {
  const [filterText, setFilterText] = useState('');
  const [showResult, setShowResult] = useState(5);
  const [jobList, setJobList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJobVacancies = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/job_vacancy/list_job', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw'
        },data:{}
      });
      setJobList(response.data.data);
    } catch (error) {
      console.error('Error fetching job vacancies:', error);
    }finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobVacancies();
  }, []);

  const handleAddSuccess = () => {
    fetchJobVacancies();
  };

  const handleEditSuccess = () => {
    fetchJobVacancies();
    setShowEditModal(false);
  };

  const filteredData = jobList.filter(
    item => item.position_job.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: 'No',
      selector: (row, index) => index + 1,
      width: '60px'
    },
    {
      name: 'Title',
      selector: row => row.position_job,
      sortable: true
    },
    {
      name: 'Date Added',
      selector: row => row.created_at  ? row.created_at.replace('T', ' ') : '',
      sortable: true
    },
    {
      name: 'Available Until',
      selector: row => row.available_until,
      sortable: true
    },
    {
      name: 'Action',
      cell: row => (
        <div className="d-flex">
          <Button 
            variant="light" 
            size="sm" 
            className="me-1"
            onClick={() => {
              setSelectedVacancy(row);
              setShowEditModal(true);
            }}
          >
            <i className="bi bi-pencil"></i>
          </Button>
          <Button 
            variant="light" 
            size="sm" 
            style={{ background: '#FAD6DD' }}
            onClick={() => handleDelete(row.job_uuid)}
          >
            <i className="bi bi-trash text-danger"></i>
          </Button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ];

  const handleDelete = async (job_uuid) => {
    if (!window.confirm('Are you sure you want to delete this vacancy?')) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/job_vacancy/delete_job/${job_uuid}`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw'
        },data:{}
      });
      fetchJobVacancies();
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Failed to delete job');
    }
  };

  return (
    <div className="d-flex">
      <div className="col-md-2">
        <Sidebar />
      </div>

      <div className="p-4 flex-grow-1 mt-4">
        <div className="p-4 card shadow">
          <h2 className="fw-bold mb-2">Job Vacancy</h2>
          <div className="d-flex mb-3">
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
              style={{ background: "#E31F52", borderRadius: 12 }}
              onClick={() => setShowAddModal(true)}
            >
              + Add Vacancy
            </Button>
          </div>

          
          <div style={{ minHeight: '300px' }}>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <Spinner animation="border" variant="danger" role="status" />
              </div>
            ) : (
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                paginationPerPage={showResult}
                paginationRowsPerPageOptions={[5, 10, 20]}
                highlightOnHover
                responsive
                noHeader
              />
            )}
          </div>


          {/* Add Vacancy Modal */}
          <AddVacancyModal 
            show={showAddModal} 
            handleClose={() => setShowAddModal(false)} 
            handleSave={handleAddSuccess} 
          />

          {/* Edit Vacancy Modal */}
          {selectedVacancy && (
            <EditVacancyModal
              show={showEditModal}
              handleClose={() => setShowEditModal(false)}
              vacancy={selectedVacancy}
              handleSave={handleEditSuccess}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobVacancy;
