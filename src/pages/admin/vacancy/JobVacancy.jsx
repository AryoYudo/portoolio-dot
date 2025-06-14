import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Sidebar from '../../../layouts/sidebar';

const JobVacancy = () => {
  const [filterText, setFilterText] = useState('');
  const [showResult, setShowResult] = useState(5);

  const data = [
    { id: 1, title: 'System Support', dateAdded: 'Apr 24, 2022, 07.20', availableUntil: 'Apr 24, 2022, 07.20' },
    { id: 2, title: 'Senior Developer', dateAdded: 'Apr 24, 2022, 07.20', availableUntil: 'Apr 24, 2022, 07.20' },
    { id: 3, title: 'QA Engineer', dateAdded: 'Apr 24, 2022, 07.20', availableUntil: 'Apr 24, 2022, 07.20' },
    { id: 4, title: 'UI/UX Designer', dateAdded: 'Apr 24, 2022, 07.20', availableUntil: 'Apr 24, 2022, 07.20' },
    { id: 5, title: 'IOT Engineer', dateAdded: 'Apr 24, 2022, 07.20', availableUntil: 'Apr 24, 2022, 07.20' },
    // tambahkan data sesuai kebutuhan
  ];

  const filteredData = data.filter(
    item => item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: 'No',
      selector: (row, index) => index + 1,
      width: '60px'
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true
    },
    {
      name: 'Date Added',
      selector: row => row.dateAdded,
      sortable: true
    },
    {
      name: 'Available Until',
      selector: row => row.availableUntil,
      sortable: true
    },
    {
      name: 'Action',
      cell: row => (
        <div className="d-flex">
          <Button variant="light" size="sm" className="me-1">
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="light" size="sm" style={{ background: '#FAD6DD' }}>
            <i className="bi bi-trash text-danger"></i>
          </Button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ];

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
            >
              + Add Vacancy
            </Button>
          </div>

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

        </div>
      </div>
    </div>
  );
};

export default JobVacancy;
