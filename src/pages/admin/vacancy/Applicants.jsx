import React, { useEffect, useState } from 'react';
import Sidebar from '../../../layouts/sidebar';
import { Button, Spinner, InputGroup, FormControl } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const ApplicantList = () => {
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/vacancy/list_applicants', {
          headers: {
            'Content-Type': 'application/json',
          },data:{}
        });

        if (res.data.status_code === 200) {
          setRawData(res.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch applicants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  const handleShowModal = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedApplicant(null);
    setShowModal(false);
  };

  const filteredData = rawData
    .filter(item =>
      item.user_name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.email.toLowerCase().includes(filterText.toLowerCase()) ||
      item.position_job.toLowerCase().includes(filterText.toLowerCase())
    );

  const columns = [
    {
      name: 'No',
      selector: (row, index) => index + 1,
      width: '60px',
    },
    {
      name: 'Applicant',
      selector: row => row.user_name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Vacancy',
      selector: row => row.position_job,
      sortable: true,
    },
    {
      name: 'Apply Date',
      selector: row => new Date(row.created_at).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      sortable: true,
    },
    {
      name: '',
      cell: (row) => (
        <Button
          variant="light"
          size="sm"
          className="border rounded-circle"
          onClick={() => handleShowModal(row)}
        >
          <i className="bi bi-eye"></i>
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '70px',
    },
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="col-md-2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="p-4 flex-grow-1 mt-4">
        <div className="p-4 card shadow">
          <h2 className="fw-bold mb-2">Job Vacancy</h2>
          <div className="mb-3">
            <span className="fw-semibold text-danger">
              Applicants ({filteredData.length})
            </span>
          </div>

          {/* Search Input */}
          <InputGroup className="mb-3" style={{ maxWidth: '100%' }}>
            <InputGroup.Text style={{ background: '#f0f0f0', borderRight: 'none' }}>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <FormControl
              placeholder="Search by name, email, or vacancy"
              style={{ background: '#f0f0f0', borderLeft: 'none' }}
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
            />
          </InputGroup>

          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 10, 20]}
              highlightOnHover
              responsive
              noHeader
            />
          )}
        </div>
      </div>

      {/* Modal Detail */}
      {selectedApplicant && (
        <div
          className={`modal fade ${showModal ? 'show d-block' : ''}`}
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={handleCloseModal}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content p-4 rounded-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h4 className="fw-bold">{selectedApplicant.user_name}</h4>
                  <div className="text-muted">
                    {selectedApplicant.position_job} &nbsp;|&nbsp;
                    {new Date(selectedApplicant.created_at).toLocaleString('en-US', {
                      weekday: 'short',
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
                <button className="btn" onClick={handleCloseModal}>
                  <i className="bi bi-x-lg fs-4"></i>
                </button>
              </div>

              <div className="mb-3">
                <div className="fw-semibold">Email</div>
                <div><strong>{selectedApplicant.email}</strong></div>
              </div>

              <div className="mb-3">
                <div className="fw-semibold">Whatsapp Number</div>
                <div><strong>{selectedApplicant.whatsapp_number}</strong></div>
              </div>

              <div className="mb-3">
                <div className="fw-semibold mb-2">CV</div>
                {selectedApplicant.cv_file.toLowerCase().endsWith('.pdf') ? (
                  <a
                    href={selectedApplicant.cv_file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger"
                  >
                    <i className="bi bi-file-earmark-pdf me-2"></i>Download CV (PDF)
                  </a>
                ) : (
                  <img
                    src={selectedApplicant.cv_file}
                    alt="CV Preview"
                    className="img-fluid rounded border"
                    style={{ maxHeight: '500px', objectFit: 'contain' }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantList;
