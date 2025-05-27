import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

const jobData = [
  {
    title: 'System Support',
    description: 'Focused on maintaining technology & ensuring system function',
    image: '/job.png', // Ganti dengan path gambar asli
  },
  {
    title: 'Junior System Developer',
    description: 'Focused on maintaining technology & ensuring system function',
    image: '/job.png',
  },
  {
    title: 'QA Engineer',
    description: 'Responsible for ensuring the quality and functionality of software products before they reach users, QA Engineer...',
    image: '/job.png',
  },
  {
    title: 'UI/UX Designer',
    description: 'Focused on creating user-friendly, visually appealing, and intuitive digital experiences',
    image: '/job.png',
  },
];
const Lowongan = () => {
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <nav className="mb-3">
        <span className="me-2 text-muted">{`< Back`}</span>
        <span className="me-2">Beranda</span> /
        <strong className="mx-2">Join Us</strong> 
      </nav>
      <h1 className="text-2xl font-bold mb-4">
        Join Us at <span className="text-gray-800">PT Satnusa Persada!</span>
      </h1>

      <p className="mb-2">
        We are excited to open opportunities for talented individuals to join the
        DOT (Digital Operational Transformation) division at PT Satnusa Persada.
        Currently, we are looking for enthusiastic professionals with expertise in
        the following areas:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>Artificial Intelligence (AI)</li>
        <li>Internet of Things (IoT)</li>
        <li>Mobile App Development</li>
        <li>Web Development</li>
      </ul>

      <p className="mb-6">
        If you are a passionate professional ready to take on challenges and grow
        with us, this is your chance to build the digital future with PT Satnusa
        Persada. Come join us and be part of our digital transformation journey!
      </p>

      <div className="flex gap-6 text-lg">
        <label className="flex items-center gap-2">
          <input type="radio" name="jobType" className="accent-red-500 mr-4" defaultChecked />
          All
        </label>
        <label className="flex items-center gap-2 ms-4">
          <input type="radio" name="jobType" className="accent-gray-700 m" />
          Fulltime
        </label>
        <label className="flex items-center gap-2 ms-4">
          <input type="radio" name="jobType" className="accent-gray-700" />
          Internship
        </label>
      </div>
      <h2 className="mb-4">Fulltime</h2>
      <div className="row">
        {jobData.map((job, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
              <img
                src={job.image}
                alt={job.title}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold">{job.title}</h5>
                  <p className="card-text small">{job.description}</p>
                </div>
                  <div className="text-end mt-2">
                    <button   onClick={() => navigate('/DetailLowongan')} className="btn btn-outline-danger" style={{ borderRadius: '12px' }}>
                      See Descriptions
                    </button>
                  </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Lowongan;