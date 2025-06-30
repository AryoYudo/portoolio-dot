import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Badge } from 'react-bootstrap';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import 'react-quill/dist/quill.snow.css'; 
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2';

const AddProjectModal = ({ show, handleClose, handleSave }) => {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [categories, setCategories] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [members, setMembers] = useState([]);
    const [jobRelates, setJobRelates] = useState([]);
    
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [technologyOptions, setTechnologyOptions] = useState([]);
    const [employeeOptions, setEmployeeOptions] = useState([]);
    const [jobRelateOptions, setJobRelateOptions] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
            const response = await axios.get("http://127.0.0.1:8000/api/master/master_category", {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw'
                }, data: {}
            });
            if (response.data.status_code === 200) {
                setCategoryOptions(response.data.data);
            } else {
                console.error("Error fetching categories:", response.data.message);
            }
            } catch (error) {
            console.error("API error:", error);
            }
        };
        
        const fetchTechnologies = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/master/master_technology", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw'
                    },data: {}
                });
                if (response.data.status_code === 200) {
                    setTechnologyOptions(response.data.data);
                } else {
                    console.error("Error fetching technologies:", response.data.message);
                }
            } catch (error) {
                console.error("API error:", error);
            }
        };
        const fetchEmployees = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/master/master_employee", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw'
                    },data: {}
                });
                if (response.data.status_code === 200) {
                    setEmployeeOptions(response.data.data);
                } else {
                    console.error("Error fetching employees:", response.data.message);
                }
            } catch (error) {
                console.error("API error:", error);
            }
        };
        const fetchJobRelate = async () => {
            try {
            const response = await axios.get("http://127.0.0.1:8000/api/master/master_job_relate", {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw'
                }, data: {}
            });
            if (response.data.status_code === 200) {
                setJobRelateOptions(response.data.data);
            }
            } catch (err) {
            console.error("Job relate API error", err);
            }
        };

        fetchJobRelate();
        fetchCategories();
        fetchTechnologies();
        fetchEmployees();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi manual
        if (!title || !shortDescription || !description || !startDate || !endDate || !members || !categories) {
            Swal.fire({
                icon: 'warning',
                title: 'Form tidak lengkap',
                text: 'Semua field teks wajib diisi!',
                confirmButtonColor: '#E31F52'
            });
            return;
        }

        if (!thumbnail) {
            Swal.fire({
                icon: 'warning',
                title: 'Thumbnail wajib',
                text: 'Silakan upload gambar thumbnail!',
                confirmButtonColor: '#E31F52'
            });
            return;
        }

        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
        if (!validTypes.includes(thumbnail.type)) {
            Swal.fire({
                icon: 'error',
                title: 'Format tidak didukung',
                text: 'Thumbnail harus berupa JPG, PNG, atau WEBP.',
                confirmButtonColor: '#E31F52'
            });
            return;
        }

        if (thumbnail.size > 2 * 1024 * 1024) {
            Swal.fire({
                icon: 'error',
                title: 'Ukuran file terlalu besar',
                text: 'Maksimal ukuran thumbnail adalah 2MB.',
                confirmButtonColor: '#E31F52'
            });
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('short_description', shortDescription);
        formData.append('description', description);
        formData.append('picture', thumbnail);
        formData.append('start_project', startDate);
        formData.append('finish_project', endDate);
        formData.append('category', JSON.stringify(categories));
        formData.append('technology', JSON.stringify(technologies));
        formData.append('member_project', JSON.stringify(members));
        formData.append('job_relate', JSON.stringify(jobRelates));

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/project_list/insert_project',
                formData,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNzMyMGFlOWMtYmNlMy00NTc1LTlkZjQtYWRhMTQ5MDYyZTA1IiwiYmFkZ2Vfbm8iOiJhcnlvMTIzIiwiZnVsbG5hbWUiOiJBcnlvIiwiZXhwIjoxNzUxMzk4MTY3fQ.dDzDBGc2cP67jT8VjpLw1NoujnCjKMKc-ByJyQ6ubqw',
                    },
                }
            );

            console.log('Success:', response.data);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: 'Project has been added successfully!',
                confirmButtonColor: '#E31F52'
            });
            handleSave();
            handleClose();
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal',
                    text: error.response.data.message || 'Terjadi kesalahan saat mengirim data.',
                });
            } else {
                console.error('Error:', error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Gagal mengirim data ke server.',
                });
            }
        }
    };

  return (
    <Modal show={show} onHide={handleClose} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Thumbnail Project <span className="text-danger">*</span></Form.Label>
            <Form.Control type="file" onChange={e => setThumbnail(e.target.files[0])} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title <span className="text-danger">*</span></Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Input Event Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Short Description (Max. 30) <span className="text-danger">*</span></Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Input Short Description"
              maxLength={30}
              value={shortDescription}
              onChange={e => setShortDescription(e.target.value)}
            />
          </Form.Group>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                    <Form.Label>Start Date <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="date" required value={startDate} onChange={e => setStartDate(e.target.value)}/>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group>
                    <Form.Label>End Date <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="date" required value={endDate} onChange={e => setEndDate(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>

           <Form.Group className="mb-3">
                <Form.Label>Category <span className="text-danger">*</span></Form.Label>

                <Form.Select
                    onChange={(e) => {
                    const selectedId = e.target.value;

                    if (!selectedId) return;

                    const selectedObj = categoryOptions.find(
                        (c) => String(c.category_id) === selectedId // pastikan tipe data cocok
                    );

                    if (
                        selectedObj &&
                        !categories.some((c) => c.category_id === selectedObj.category_id)
                    ) {
                        setCategories((prev) => [
                        ...prev,
                        {
                            category_id: selectedObj.category_id,
                            category_name: selectedObj.category_name,
                        },
                        ]);
                    }

                    e.target.value = "";
                    }}
                >
                    <option value="">Choose Category</option>
                    {categoryOptions.map((cat) => (
                    <option key={cat.category_id} value={cat.category_id}>
                        {cat.category_name}
                    </option>
                    ))}
                </Form.Select>

                <div className="mt-2">
                    {categories.map((cat) => (
                    <Badge
                        bg="light"
                        text="dark"
                        className="me-1 mb-1"
                        key={cat.category_id}
                    >
                        {cat.category_name}
                        <span
                        style={{ cursor: "pointer", color: "red", marginLeft: 4 }}
                        onClick={() =>
                            setCategories((prev) =>
                            prev.filter((c) => c.category_id !== cat.category_id)
                            )
                        }
                        >
                        ×
                        </span>
                    </Badge>
                    ))}
                </div>
                </Form.Group>


               <Form.Group className="mb-3">
                    <Form.Label>Technology Used <span className="text-danger">*</span></Form.Label>

                    <Form.Select
                        onChange={(e) => {
                        const selectedId = Number(e.target.value); // pastikan number, sesuaikan dengan data

                        if (!selectedId) return;

                        const selectedObj = technologyOptions.find(
                            (t) => t.technology_id === selectedId
                        );

                        if (
                            selectedObj &&
                            !technologies.some((t) => t.technology_id === selectedObj.technology_id)
                        ) {
                            setTechnologies((prev) => [
                            ...prev,
                            {
                                technology_id: selectedObj.technology_id,
                                technology_name: selectedObj.technology_name,
                            },
                            ]);
                        }

                        e.target.value = ""; // reset ke placeholder
                        }}
                    >
                        <option value="">Choose Technology Used</option>
                        {technologyOptions.map((tech) => (
                        <option key={tech.technology_id} value={tech.technology_id}>
                            {tech.technology_name}
                        </option>
                        ))}
                    </Form.Select>

                    <div className="mt-2">
                        {technologies.map((tech) => (
                        <Badge
                            bg="light"
                            text="dark"
                            className="me-1 mb-1"
                            key={tech.technology_id}
                        >
                            {tech.technology_name}
                            <span
                            style={{ cursor: "pointer", color: "red", marginLeft: 4 }}
                            onClick={() =>
                                setTechnologies((prev) =>
                                prev.filter((t) => t.technology_id !== tech.technology_id)
                                )
                            }
                            >
                            ×
                            </span>
                        </Badge>
                        ))}
                    </div>
                </Form.Group>



            <Form.Group className="mb-3">
                <Form.Label>Member Project <span className="text-danger">*</span></Form.Label>

                <Form.Select
                    onChange={(e) => {
                    const selectedID = e.target.value;
                    const selectedObj = employeeOptions.find(emp => emp.employee_id.toString() === selectedID);

                    if (
                        selectedID &&
                        !members.some(m => m.employee_id.toString() === selectedID)
                    ) {
                        // Hanya simpan data yg diperlukan
                        setMembers([
                        ...members,
                        {
                            employee_id: selectedObj.employee_id,
                            employee_name: selectedObj.employee_name
                        }
                        ]);
                    }

                    e.target.value = ""; // reset select
                    }}
                >
                    <option value="">Input Member Project</option>
                    {employeeOptions.map((emp) => (
                    <option key={emp.employee_id} value={emp.employee_id}>
                        {emp.employee_name}
                    </option>
                    ))}
                </Form.Select>

                <div className="mt-2">
                    {members.map((emp) => (
                    <Badge
                        bg="light"
                        text="dark"
                        className="me-1 mb-1"
                        key={emp.employee_id}
                    >
                        {emp.employee_name}
                        <span
                        style={{ cursor: 'pointer', color: 'red', marginLeft: 4 }}
                        onClick={() =>
                            setMembers(
                            members.filter(m => m.employee_id !== emp.employee_id)
                            )
                        }
                        >
                        ×
                        </span>
                    </Badge>
                    ))}
                </div>
            </Form.Group>


            <Form.Group className="mb-3">
                    <Form.Label>Job Related</Form.Label>
    
                    <Form.Select
                        onChange={(e) => {
                        const selectedUUID = e.target.value;
                        const selectedObj = jobRelateOptions.find(
                            job => job.job_uuid === selectedUUID
                        );
    
                        if (
                            selectedUUID &&
                            !jobRelates.some(j => j.job_id === selectedObj.job_id)
                        ) {
                            setJobRelates([
                            ...jobRelates,
                            {
                                job_id: selectedObj.job_id,
                                position_job: selectedObj.position_job
                            }
                            ]);
                        }
    
                        e.target.value = "";
                        }}
                    >
                        <option value="">Input Job Related</option>
                        {jobRelateOptions.map(job => (
                        <option key={job.job_uuid} value={job.job_uuid}>
                            {job.position_job}
                        </option>
                        ))}
                    </Form.Select>
    
                    <div className="mt-2">
                        {jobRelates.map(job => (
                        <Badge
                            bg="light"
                            text="dark"
                            className="me-1 mb-1"
                            key={job.job_id}
                        >
                            {job.position_job}
                            <span
                            style={{ cursor: 'pointer', color: 'red', marginLeft: 4 }}
                            onClick={() =>
                                setJobRelates(
                                jobRelates.filter(j => j.job_id !== job.job_id)
                                )
                            }
                            >
                            ×
                            </span>
                        </Badge>
                        ))}
                    </div>
                </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Description <span className="text-danger">*</span></Form.Label>
                <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={setDescription}
                    placeholder="Input content with formatting"
                    style={{ height: '200px', marginBottom: '30px' }}
                />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          style={{ background: '#E31F52', borderRadius: 12, border: 'none' }} 
          className="w-100 py-2 fw-bold"
          onClick={handleSubmit}
        >
          Add Project
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProjectModal;
