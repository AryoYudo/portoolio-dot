import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Badge,   Spinner, } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'react-quill/dist/quill.snow.css'; 
import ReactQuill from 'react-quill';

const DetailPerProject = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [memberIntern, setMemberIntern] = useState([]);
  const [relatedJobs, setRelatedJobs] = useState([]);

  const fadeInUp = (delay = 0) => ({
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay },
      viewport: { once: true, amount: 0.3 },
  });

  useEffect(() => {
    if (!uuid) return;

    const fetchDetail = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/project_list/detail_project/${uuid}`, {
          headers: { "Content-Type": "application/json" },data:{}
        });
        if (res.data.status_code === 200) {
          setDetail(res.data.data);
          
          const allParticipants = res.data.data.employee_participant;
          const interns = allParticipants.filter(emp =>
            emp.employee_status?.toLowerCase() === "internship"
          );
          const others = allParticipants.filter(emp =>
            emp.employee_status?.toLowerCase() !== "internship"
          );

          setDetail(prev => ({
            ...prev,
            employee_participant: others,
          }));
          setMemberIntern(interns);
          setRelatedJobs(res.data.data.job_relate_project || []);
        }
      } catch (err) {
        console.error("Gagal ambil detail project:", err);
      }
    };

    fetchDetail();
  }, [uuid]);

  if (!detail) {
    return<div className="d-flex justify-content-center align-items-center vh-100"><Spinner animation="border" variant="danger" /></div>;
  }

  return (
<Container className="my-5">
      {/* Breadcrumb */}
      <nav className="mb-3">
        <Link to="/" className="me-2 text-decoration-none text-dark">{`< Beranda`}</Link> /
        <Link to="/lowongan" className="mx-2 text-decoration-none text-dark">Project</Link> /
        <Link className="mx-2 text-decoration-none text-dark">Detail Project</Link>
      </nav>

      <Row className="justify-content-center">
        <Col md={12}>
          <motion.h2 className="fw-bold text-center" {...fadeInUp(0)}>
            {detail.title}
          </motion.h2>
          <motion.p className="text-center text-muted" style={{ marginTop: '-5px' }} {...fadeInUp(0.1)}>
            {detail.short_description}
          </motion.p>

          {/* Tags */}
          <motion.div className="d-flex justify-content-center gap-2 mb-4" {...fadeInUp(0.2)}>
            {detail.project_categories.map((cat, i) => (
              <span key={i} className="badge rounded-pill bg-light text-dark border">
                {cat.category_name}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeInUp(0.3)}>
            <Image
              src={detail.thumbnail_project || "job.png"}
              alt={detail.title}
              fluid
              className="shadow"
              style={{
                border: '1px solid #dee2e6',
                width: '100%',
                maxHeight: '470px',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </motion.div>
        </Col>
      </Row>

      <Row className="mt-4">
          <Col md={9}>
            <motion.div {...fadeInUp(0.4)} dangerouslySetInnerHTML={{ __html: detail.description }} />
          </Col>

          <Col md={3}>
          <div className="px-3">
            <motion.div className="mb-4" {...fadeInUp(0.5)}>
              <h6 className="fw-bold border-start border-4 ps-2 border-danger text-dark" style={{ borderColor: '#0d6efd' }}>
                Technology Used
              </h6>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {detail.technology_project.map((tech, i) => (
                  <Badge key={i} bg="light" text="dark" className="border">
                    {tech.technology_name}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div className="mb-4" {...fadeInUp(0.6)}>
              <h6 className="fw-bold border-start border-4 ps-2 border-danger text-dark">
                Member Project
              </h6>
              {detail.employee_participant.map((member, i) => (
                <div className="d-flex align-items-center mb-3" key={i}>
                  <Image src={member.employee_picture}  width={60} height={60} className="me-2 object-fit-cover" />
                  <div>
                    <div className="fw-semibold">{member.employee_name}</div>
                    <div className="text-muted small">{member.employee_position}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="mb-4" {...fadeInUp(0.7)}>
              <h6 className="fw-bold border-start border-4 ps-2 border-danger text-dark">
                Member Internship Project
              </h6>
              {memberIntern.map((intern, i) => (
                <div className="d-flex align-items-center mb-3" key={i}>
                  <Image src={intern.employee_picture}  width={60} height={60} className="me-2 object-fit-cover" />
                  <div>
                    <div className="fw-semibold">{intern.employee_name}</div>
                    <div className="text-muted small">{intern.employee_position}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="mb-4" {...fadeInUp(0.8)}>
              <h6 className="fw-bold border-start border-4 ps-2 border-danger text-dark">
                Related Job Postings
              </h6>
              {relatedJobs.length === 0 ? (
                <p className="text-muted">No related jobs available.</p>
              ) : (
                relatedJobs.map((job, i) => (
                  <div className="d-flex mb-3" key={i}>
                    <Image src={job.job_picture} rounded width={60} height={40} className="me-2 object-fit-cover" />
                    <div>
                      <div className="fw-semibold">{job.position_job}</div>
                      <div className="text-muted small">
                        <a href={job.link} className="text-decoration-none">Join here!</a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </div>
        </Col>
      </Row>

      {/* Related Projects */}
      <Row className="justify-content-center">
        <Col md={12}>
          <div className="row">
            {detail.others_project.map((proj, i) => (
              <motion.div
                className="col-md-3 mb-4"
                key={proj.project_uuid}
                {...fadeInUp(0.1 * i)}
              >
                <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
                  <img
                    src={proj.thumbnail_project || "job.png"}
                    className="card-img-top"
                    style={{
                      height: '180px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px'
                    }}
                    alt="Thumbnail"
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-bold">{proj.title}</h5>
                      <div className="d-flex flex-wrap gap-1">
                        {proj.project_categories.map((cat, idx) => (
                          <span key={idx} className="badge bg-danger-subtle text-danger fw-medium">
                            {cat.category_name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted mt-2">
                      {new Date(proj.finish_project).getFullYear()}
                    </p>
                    <div className="text-end mt-2">
                      <button
                        className="btn btn-outline-danger"
                        style={{ borderRadius: '12px' }}
                        onClick={() => navigate(`/user/detailProject/${proj.project_uuid}`)}
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPerProject;