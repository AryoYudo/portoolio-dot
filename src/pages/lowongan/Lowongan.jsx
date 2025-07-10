import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';


const Lowongan = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(0); // 0 = All, 1 = Fulltime, 2 = Internship

  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/vacancy/list_lowongan', {
        headers: {
          'Content-Type': 'application/json'
        }, data: {}
      });
      if (res.data.status_code === 200) {
        setJobs(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (selectedStatus === 0) {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(job => job.status_id === selectedStatus);
      setFilteredJobs(filtered);
    }
  }, [selectedStatus, jobs]);
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });


  return (
    <div className="container my-5">
      <nav className="mb-3">
        <Link to="/" className="me-2 text-decoration-none text-dark">{`< Beranda`}</Link> /
        <strong className="mx-2">Join Us</strong>
      </nav>

      <h1 className="text-2xl font-bold mb-4">
        Join Us at <span className="text-gray-800">PT Satnusa Persada!</span>
      </h1>
      <motion.div {...fadeInUp(0.1)}>
        <p className="mb-2">
          We are excited to open opportunities for talented individuals to join the
          DOT (Digital Operational Transformation) division at PT Satnusa Persada.
          Currently, we are looking for enthusiastic professionals with expertise in
          the following areas:
        </p>
      </motion.div>

      <motion.ul className="list-disc list-inside mb-4" {...fadeInUp(0.2)}>
        <li>Artificial Intelligence (AI)</li>
        <li>Internet of Things (IoT)</li>
        <li>Mobile App Development</li>
        <li>Web Development</li>
        <li>RPA</li>
      </motion.ul>

      <motion.div className="flex gap-6 text-lg mb-4" {...fadeInUp(0.3)}>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="jobType"
            className="accent-red-500"
            checked={selectedStatus === 0}
            onChange={() => setSelectedStatus(0)}
          />
          All
        </label>
        <label className="flex items-center gap-2 ms-4">
          <input
            type="radio"
            name="jobType"
            className="accent-gray-700"
            checked={selectedStatus === 1}
            onChange={() => setSelectedStatus(1)}
          />
          Fulltime
        </label>
        <label className="flex items-center gap-2 ms-4">
          <input
            type="radio"
            name="jobType"
            className="accent-gray-700"
            checked={selectedStatus === 2}
            onChange={() => setSelectedStatus(2)}
          />
          Internship
        </label>
        <h2 className="mb-4">
          {selectedStatus === 0 ? 'All' : selectedStatus === 1 ? 'Fulltime' : 'Internship'}
        </h2>
      </motion.div>

      <div className="row">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={index}
            className="col-md-3 mb-4"
            {...fadeInUp(index * 0.1)}
          >
            <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
              <img
                src={job.job_picture}
                alt={job.position_job}
                className="card-img-top"
                style={{
                  height: '180px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px'
                }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold">{job.position_job}</h5>
                  <p className="card-text small">{job.short_description}</p>
                </div>
                <div className="text-end mt-2">
                  <button
                    onClick={() => navigate(`/user/detailLowongan/${job.job_uuid}`)}
                    className="btn btn-outline-danger"
                    style={{ borderRadius: '12px' }}
                  >
                    See Descriptions
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Lowongan;