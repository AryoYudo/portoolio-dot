import React from 'react';
import { Container, Row, Col, Image, Badge, Card } from 'react-bootstrap';

const technologies = ['AI Vision', 'Camera Vision', 'Python', 'Object Detection', 'Image Classification'];
const memberProject = [
  { name: 'Andhika Dwi Cahyono', image: '/images/member1.jpg' },
  { name: 'Yosep Wahyu Saputra', image: '/images/member2.jpg' },
];
const memberIntern = [
  { name: 'M. Rizky Apriansyah', image: '/images/intern1.jpg' },
  { name: 'Jonathan', image: '/images/intern2.jpg' },
];
const relatedJobs = [
  { title: 'AI Software Engineer', image: '/images/job1.jpg' },
  { title: 'Computer Vision Intern', image: '/images/job2.jpg' },
];

const DetailPerProject = () => {
  return (
    <Container className="my-5">
      {/* Title & Top Image */}
        {/* Breadcrumb */}
        <div className="mb-3 text-muted small">
          <span className="me-1">←</span>
          <span className="me-1">Beranda</span> /
          <span className="mx-1">Project</span> /
          <strong>AI-Enabled Camera Vision</strong>
        </div>
      <Row className="justify-content-center">
        <Col md={12}>
          {/* Title */}
          <h2 className="fw-bold text-center">AI-Enabled Camera Vision</h2>
          <p className="text-center text-muted" style={{ marginTop: '-5px' }}>
            For Spring Sheet Metal (SME) Inspection
          </p>

          {/* Tags */}
          <div className="d-flex justify-content-center gap-2 mb-4">
            <span className="badge rounded-pill bg-light text-dark border">
              Artificial Intelligence
            </span>
            <span className="badge rounded-pill bg-light text-dark border">
              Internet of Things
            </span>
          </div>

          {/* Full-width image */}
          <Image
            src="job.png"
            alt="Camera Vision"
            fluid
            className=" shadow "
            style={{
              border: '1px solid #dee2e6',
              width: '100%',
              maxHeight: '470px',
              objectFit: 'cover',
              borderRadius: '12px',
            }}
          />
        </Col>
      </Row>

      {/* Description */}
      <Row className="mt-4">
        <Col md={8}>
          <p>
            The system is made to digitize the sewing gear mesh checking process which was previously still through a manual process. Mainly, the system is capable of improving the sewing mesh inspection process by automating the inspection in front end wheel components that need to be aligned to avoid internal damage.
          </p>

          <Image src="/images/vision-diagram.png" fluid className="my-4 rounded" />

          <Row className="my-4">
            <Col xs={6}>
              <Image src="/images/good.png" fluid className="border p-2" />
            </Col>
            <Col xs={6}>
              <Image src="/images/not-good.png" fluid className="border p-2" />
            </Col>
          </Row>

          {/* Benefit Points */}
          <h5 className="fw-bold mt-4">BENEFIT POINTS</h5>
          <ul>
            <li>Improve accuracy of detection using AI-based image classification and object detection</li>
            <li>Reduce human error during visual QC process</li>
            <li>Enable faster production line without slowing down for manual inspection</li>
            <li>Allow defect tracking, logging, and notification to MES</li>
          </ul>

          {/* Conclusion */}
          <h5 className="fw-bold mt-4">Conclusion</h5>
          <p>
            Based on current implementation result, the camera vision inspection process significantly improves productivity, reduces inspection time, and gives better insight into recurring production issues. System is scalable and ready for further expansion to other machine types and inspection areas.
          </p>

          {/* Bottom Image */}
          <Row className="my-4">
            <Col md={6}>
              <Image src="/images/final-inspection-1.jpg" fluid className="rounded shadow" />
            </Col>
            <Col md={6}>
              <Image src="/images/final-inspection-2.jpg" fluid className="rounded shadow" />
            </Col>
          </Row>
        </Col>
        {/* Sidebar Right */}
    <Col md={4}>

      <div className="px-3">
        {/* Member Project */}
        <div className="mb-4">
          <h6 className="fw-bold border-start border-4 ps-2 border-danger  text-dark" style={{ borderColor: '#0d6efd' }}>
            Technology Used
          </h6>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, idx) => (
              <Badge key={idx} bg="light" text="dark" className="border">
                {tech}
              </Badge>
            ))}
          </div>
        </div>


        {/* Member Project */}
        <div className="mb-4">
          <h6 className="fw-bold border-start border-4 ps-2 border-danger text-dark">Member Project</h6>
          {memberProject.map((member, i) => (
            <div className="d-flex align-items-center mb-3" key={i}>
              <Image src={member.image} roundedCircle width={40} height={40} className="me-2 object-fit-cover" />
              <div>
                <div className="fw-semibold">{member.name}</div>
                <div className="text-muted small">{member.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Member Internship Project */}
        <div className="mb-4">
          <h6 className="fw-bold border-start border-4 ps-2 border-danger text-dark">Member Internship Project</h6>
          {memberIntern.map((intern, i) => (
            <div className="d-flex align-items-center mb-3" key={i}>
              <Image src={intern.image} roundedCircle width={40} height={40} className="me-2 object-fit-cover" />
              <div>
                <div className="fw-semibold">{intern.name}</div>
                <div className="text-muted small">{intern.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Related Job Postings */}
        <div className="mb-4">
          <h6 className="fw-bold border-start border-4 ps-2 border-danger text-dark">Related Job Postings</h6>
          {relatedJobs.map((job, i) => (
            <div className="d-flex mb-3" key={i}>
              <Image src={job.image} rounded width={60} height={40} className="me-2 object-fit-cover" />
              <div>
                <div className="fw-semibold">{job.title}</div>
                <div className="text-muted small"><a href={job.link} className="text-decoration-none">Join here!</a></div>
              </div>
            </div>
          ))}
        </div>

      </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12}>
          {/* Full-width image */}
          <div className="row">
            
              <div className="col-md-3 mb-4">
                <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
                  <img
                    src="job.png"
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-bold">AI ASSISTANT</h5>
                      <p className="card-text small">BLA BLA BLA BLA</p>
                    </div>
                    <p>2024</p>
                    <div className="text-end mt-2">
                      <button  className="btn btn-outline-danger" style={{ borderRadius: '12px' }}>
                        Priview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
                  <img
                    src="job.png"
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-bold">AI ASSISTANT</h5>
                      <p className="card-text small">BLA BLA BLA BLA</p>
                    </div>
                    <p>2024</p>
                    <div className="text-end mt-2">
                      <button  className="btn btn-outline-danger" style={{ borderRadius: '12px' }}>
                        Priview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
                  <img
                    src="job.png"
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-bold">AI ASSISTANT</h5>
                      <p className="card-text small">BLA BLA BLA BLA</p>
                    </div>
                    <p>2024</p>
                    <div className="text-end mt-2">
                      <button  className="btn btn-outline-danger" style={{ borderRadius: '12px' }}>
                        Priview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card shadow-sm border-0 h-100" style={{ borderRadius: '20px' }}>
                  <img
                    src="job.png"
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-bold">AI ASSISTANT</h5>
                      <p className="card-text small">BLA BLA BLA BLA</p>
                    </div>
                    <p>2024</p>
                    <div className="text-end mt-2">
                      <button  className="btn btn-outline-danger" style={{ borderRadius: '12px' }}>
                        Priview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPerProject;
