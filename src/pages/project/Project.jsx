import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const ProjectPerList = () => {
  const tags = [
    "#AdaptiveLeadership",
    "#StartupVisionary",
    "#InnoMaestro",
    "#TeamAgility",
    "#UsersObsessed",
    "#VelocityDecisionMaking"
  ];

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Row className="align-items-center mb-3 mt-4">
        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInLeft}
        >
          <Link to="/" className="me-2 text-decoration-none text-dark">{`< Beranda`}</Link> /
          <Link to="/lowongan" className="mx-2 text-decoration-none fw-bold text-dark">Project</Link>
        </motion.nav>
      </Row>

      {/* Filters */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInTop}
      >
        <Row className="g-2 mb-4">
          <Col xs={12} sm={6} md={3}>
            <Form.Select>
              <option>Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Form.Select>
              <option>Services</option>
              <option>Consulting</option>
              <option>Development</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Form.Select>
              <option>Category</option>
              <option>AI</option>
              <option>IoT</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Button variant="light" className="text-danger fw-semibold" style={{ backgroundColor: '#ffe5ec' }}>
              Reset
            </Button>
          </Col>
        </Row>
      </motion.div>

      {/* Title & Tags */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp(0.2)}
      >
        <h1 className="text-center fw-bold">PROJECT DOT 2025</h1>
      </motion.div>

      <motion.div
        className="d-flex flex-wrap justify-content-center gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp(0.4)}
      >
        {tags.map((tag, index) => (
          <motion.h6 key={index} style={{ color: "#E31F52", opacity: "0.4" }}>
            {tag}
          </motion.h6>
        ))}
      </motion.div>

      <hr style={{ borderTop: '2px solid', margin: '10px 0' }} />

      {/* Project Cards */}
      <Row className="mt-4">
        {[1, 2, 3, 4].map((_, index) => (
          <Col key={index} md={3} className="mb-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                ...fadeInUp(index * 0.2),
                ...hoverCard
              }}
              className="card shadow-sm border-0 h-100"
              style={{ borderRadius: '20px' }}
            >
              <img
                src="job.png"
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
                  <h5 className="card-title fw-bold">AI-Enabled Camera Vision</h5>
                  <p className="card-text small text-muted">For Spring Sheet Metal Inspection</p>
                </div>
                <p className="text-muted">2024</p>
                <div className="text-end mt-2">
                  <Button variant="outline-danger" style={{ borderRadius: '12px' }}>
                    Preview
                  </Button>
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
        {/* Title & Tags */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp(0.2)}
      >
        <h1 className="text-center fw-bold">PROJECT DOT 2025</h1>
      </motion.div>

      <motion.div
        className="d-flex flex-wrap justify-content-center gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp(0.4)}
      >
        {tags.map((tag, index) => (
          <motion.h6 key={index} style={{ color: "#E31F52", opacity: "0.4" }}>
            {tag}
          </motion.h6>
        ))}
      </motion.div>

      <hr style={{ borderTop: '2px solid', margin: '10px 0' }} />
      {[1, 2, 3, 4].map((_, index) => (
          <Col key={index} md={3} className="mb-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                ...fadeInUp(index * 0.2),
                ...hoverCard
              }}
              className="card shadow-sm border-0 h-100"
              style={{ borderRadius: '20px' }}
            >
              <img
                src="job.png"
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
                  <h5 className="card-title fw-bold">AI-Enabled Camera Vision</h5>
              <img src="/category/Ai.svg" style={{ height: '25px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                </div>
                <p className="text-muted">2024</p>
                <div className="text-end mt-2">
                  <Button variant="outline-danger" style={{ borderRadius: '12px' }}>
                    Preview
                  </Button>
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectPerList;
