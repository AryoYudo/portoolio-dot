import React from 'react';
import Sidebar from '../../../layouts/sidebar';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

const ApplicantList = () => {
  const [filterText, setFilterText] = React.useState('');

  const data = [
    { id: 1, name: 'Ariwibowo Dualipa', email: 'wibowo@gmail.com', vacancy: 'QA Engineer', date: 'Apr 24, 2022, 07.20' },
    { id: 2, name: 'Nanda Pusaka Hadiwiati', email: 'nnpkhdwiti11@gmail.com', vacancy: 'QA Engineer', date: 'Apr 24, 2022, 07.20' },
    { id: 3, name: 'Sophia First', email: 'frst.sophia@gmail.com', vacancy: 'UI/UX Designer', date: 'Apr 24, 2022, 07.20' },
    { id: 4, name: 'Kufaku Yadi', email: 'yadi@gmail.com', vacancy: 'UI/UX Designer', date: 'Apr 24, 2022, 07.20' },
    { id: 5, name: 'Budi', email: 'dibudibudi0909@gmail.com', vacancy: 'IoT Engineer', date: 'Apr 24, 2022, 07.20' },
  ];

  const columns = [
    {
      name: 'No',
      selector: (row, index) => index + 1,
      width: '60px',
    },
    {
      name: 'Applicant',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Vacancy',
      selector: row => row.vacancy,
      sortable: true,
    },
    {
      name: 'Apply Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: '',
      cell: () => (
        <Button variant="light" size="sm" className="border rounded-circle">
          <i className="bi bi-eye"></i>
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '70px',
    },
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase()) ||
    item.email.toLowerCase().includes(filterText.toLowerCase()) ||
    item.vacancy.toLowerCase().includes(filterText.toLowerCase())
  );

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
            <span className="fw-semibold text-danger">Applicants ({data.length})</span>
          </div>

          {/* Search */}
          <InputGroup className="mb-3" style={{ maxWidth: '100%' }}>
            <InputGroup.Text style={{ background: '#f0f0f0', borderRight: 'none' }}>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <FormControl
              placeholder="Search by name, etc."
              style={{ background: '#f0f0f0', borderLeft: 'none' }}
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
            />
          </InputGroup>

          {/* Data Table */}
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
        </div>
      </div>
    </div>
  );
};

export default ApplicantList;
