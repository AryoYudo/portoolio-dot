import { Container, Row, Col, Form, Button, Spinner, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as icons from 'simple-icons/icons';
import techSlugMap from '../../utils/techSlugMap'; // sesuaikan path

// Motion variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeInTop = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' }
  }
});

const hoverCard = {
  hover: {
    scale: 1.03,
    boxShadow: "0px 8px 20px rgba(0,0,0,0.1)"
  }
};

const getIconByName = (name) => {
  const slug = techSlugMap[name];
  if (!slug) return null;

  const iconKey = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  const icon = icons[iconKey];
  return icon ? { svg: icon.svg, hex: icon.hex } : null;
};

const ProjectPerList = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  
  const navigate = useNavigate();
  
  const handlePreview = (uuid) => {
    navigate(`/user/detailProject/${uuid}`);
  };
  const tags = [
    "#AdaptiveLeadership",
    "#StartupVisionary",
    "#InnoMaestro",
    "#TeamAgility",
    "#UsersObsessed",
    "#VelocityDecisionMaking"
  ];

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/master/master_category', {
          headers: {
            'Content-Type': 'application/json'
          }, data: {}
        });

        if (res.data.status_code === 200) {
          setCategories(res.data.data);
        }
      } catch (error) {
        console.error("Gagal ambil kategori:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const params = {};
        if (selectedCategory) params.category = selectedCategory;
        if (selectedYear) params.year = selectedYear;

        const res = await axios.request({
          method: 'GET',
          url: 'http://127.0.0.1:8000/api/project_list/list_project',
          headers: { "Content-Type": "application/json" },
          params,
          data: {}
        });

        if (res.data.status_code === 200) {
          setProjects(res.data.data);
        }
      } catch (err) {
        console.error("Gagal ambil proyek:", err);
      }
    };
    fetchProjects();
  }, [selectedCategory, selectedYear]);

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedYear("");
  };

  // Filter projects per tahun
  const projects2025 = projects.filter(p => new Date(p.finish_project).getFullYear() === 2025);
  const projects2024 = projects.filter(p => new Date(p.finish_project).getFullYear() === 2024);

  // if (!projects) {
  //   return<div className="d-flex justify-content-center align-items-center vh-100"><Spinner animation="border" variant="danger" /></div>;
  // }

  return (
    <Container className="py-4">
      {projects.length === 0 && (
        <div className="d-flex justify-content-center align-items-center vh-100"><Spinner animation="border" variant="danger" /></div>
      )}
      {/* Breadcrumb */}
      <Row className="align-items-center mb-3 mt-4">
        <motion.nav initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInLeft}>
          <Link to="/" className="me-2 text-decoration-none text-dark">{`< Beranda`}</Link> /
          <Link to="/lowongan" className="mx-2 text-decoration-none fw-bold text-dark">Project</Link>
        </motion.nav>
      </Row>

      {/* Filters */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInTop}>
        <Row className="g-2 mb-4">
          <Col xs={12} sm={6} md={3}>
            <Form.Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="">All</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(parseInt(e.target.value))}>
              <option value="">Services</option>
              {categories.map((item) => (
                <option key={item.category_id} value={item.category_id}>
                  {item.category_name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Button variant="light" className="text-danger fw-semibold" style={{ backgroundColor: "#ffe5ec" }} onClick={handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </motion.div>

      {/* Projects */}
      <Row className="mt-4">

        {(selectedYear === "" || selectedYear === "2025") && projects2025.length > 0 && (
          <>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp(0.2)} >
              <h1 className="text-center fw-bold">PROJECT DOT 2025</h1>
            </motion.div>

            <motion.div className="d-flex flex-wrap justify-content-center gap-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp(0.4)} >
              {tags.map((tag, index) => (
                <motion.h6 key={index} style={{ color: "#E31F52", opacity: "0.4" }}>
                  {tag}
                </motion.h6>
              ))}
            </motion.div>

            <motion.hr initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp(0.5)} style={{ borderTop: '2px solid', margin: '10px 0' }} />

            {projects2025.map((project, index) => (
              <Col key={project.project_uuid} md={3} className="mb-4">
                <motion.div initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true, amount: 0.3 }} variants={{ ...fadeInUp(index * 0.2), ...hoverCard }} className="card shadow-sm border-0 mt-5" style={{ borderRadius: '20px',  minHeight: '450px'  }} >
                  <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>

                  <img
                    src={project.thumbnail_project || "job.png"}
                    className="card-img-top"
                    alt="thumbnail"
                    style={{
                      height: '180px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px'
                    }}
                  />
                  <div className="card-body flex-column justify-content-between"  style={{ minHeight: '50px' }}>
                    <div>
                      <h5 className="card-title fw-bold">{project.title}</h5>
                      <div className="d-flex flex-wrap gap-1">
                        {project.project_categories.map((cat, i) => (
                          <span key={i} className="badge bg-danger-subtle text-danger fw-medium">
                            <span className="project-logo  d-inline-block" style={{ width: '15px', height: '15px' }} dangerouslySetInnerHTML={{ __html: cat.logo }} />
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted">
                      {new Date(project.finish_project).getFullYear()}
                    </p>

                    <div className="d-flex justify-content-between align-items-start mt-2 ">
                      <div className="d-flex flex-wrap gap-2">
                        {project.technology_project.map((tech, i) => {
                          const icon = getIconByName(tech.technology_name);
                          if (icon) {
                            const svgWithColor = icon.svg.replace('<svg', `<svg fill="#${icon.hex}"`);
                            return (
                              <span
                                key={i}
                                className="d-inline-block"
                                title={tech.technology_name}
                                style={{ width: '28px', height: '28px' }}
                                dangerouslySetInnerHTML={{ __html: svgWithColor }}
                              />
                            );
                          }
                          // Kalau tidak ada logo, tampilkan teks dengan badge
                          return (
                            <Badge key={i} bg="light" text="dark" className="border px-2 py-1">
                              {tech.technology_name}
                            </Badge>
                          );
                        })}
                      </div>
                      <Button variant="outline-danger" style={{ borderRadius: '12px' }}  onClick={() => handlePreview(project.project_uuid)}>
                        Preview
                      </Button>
                    </div>
                  </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </>
        )}

        {(selectedYear === "" || selectedYear === "2024") && projects2024.length > 0 && (
          <>
            <motion.div initial="hidden" whileInView="visible" className='mt-5' viewport={{ once: true, amount: 0.2 }} variants={fadeInUp(0.2)} >
              <h1 className="text-center fw-bold">PROJECT DOT 2024</h1>
            </motion.div>

            <motion.div className="d-flex flex-wrap justify-content-center gap-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp(0.4)} >
              {tags.map((tag, index) => (
                <motion.h6 key={index} style={{ color: "#E31F52", opacity: "0.4" }}>
                  {tag}
                </motion.h6>
              ))}
            </motion.div>

            <motion.hr initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp(0.5)} style={{ borderTop: '2px solid', margin: '10px 0' }} />

            {projects2024.map((project, index) => (
              <Col key={project.project_uuid} md={3} className="mb-4">
                <motion.div initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true, amount: 0.3 }} variants={{ ...fadeInUp(index * 0.2), ...hoverCard }} className="card shadow- border-0 mt-5" style={{ borderRadius: '20px' }} >
                  <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
                      <img
                        src={project.thumbnail_project || "job.png"}
                        className="card-img-top"
                        style={{
                          height: '180px',
                          objectFit: 'cover',
                          borderTopLeftRadius: '20px',
                          borderTopRightRadius: '20px'
                        }}
                        alt="Thumbnail"
                      />
                      <div className="card-body  flex-column justify-content-between">
                        <div>
                          <h5 className="card-title fw-bold">{project.title}</h5>
                          <div className="d-flex flex-wrap gap-1">
                            {project.project_categories.map((cat, i) => (
                              <span key={i} className="badge bg-danger-subtle text-danger fw-medium">
                                <span
                                  className="project-logo d-inline-block"
                                  style={{ width: '15px', height: '15px' }}
                                  dangerouslySetInnerHTML={{ __html: cat.logo }}
                                />
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-muted mt-2">
                          {new Date(project.finish_project).getFullYear()}
                        </p>

                        <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                          <div className="d-flex flex-wrap gap-2 align-items-center">
                            {project.technology_project.map((tech, i) => {
                              const icon = getIconByName(tech.technology_name);
                              if (icon) {
                                const svgWithColor = icon.svg.replace('<svg', `<svg fill="#${icon.hex}"`);
                                return (
                                  <span
                                    key={i}
                                    className="d-inline-block"
                                    title={tech.technology_name}
                                    style={{ width: '28px', height: '28px' }}
                                    dangerouslySetInnerHTML={{ __html: svgWithColor }}
                                  />
                                );
                              }
                              return (
                                <Badge key={i} bg="light" text="dark" className="border px-2 py-1">
                                  {tech.technology_name}
                                </Badge>
                              );
                            })}
                          </div>

                          <Button
                            variant="outline-danger"
                            style={{ borderRadius: '12px' }}
                            onClick={() => handlePreview(project.project_uuid)}
                          >
                            Preview
                          </Button>
                        </div>
                      </div>
                    </div>

                </motion.div>
              </Col>
            ))}
          </>
        )}

      </Row>

    </Container>
  );
};

export default ProjectPerList;