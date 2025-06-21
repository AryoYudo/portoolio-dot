import React from 'react';
import { Container, Row, Col, Form, Button, Breadcrumb } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';

const ProjectPerList = () => {
  return (
    <Container className="mt-4">
      {/* Breadcrumb */}
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Button variant="link" className="p-0 text-dark fw-semibold d-flex align-items-center">
            <BsArrowLeft className="me-1" /> Back
          </Button>
        </Col>
        <Col>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs="span" linkProps={{ className: 'text-muted' }}>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item active className="fw-bold">Project</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {/* Filters */}
      <Row className="g-2">
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
      <Row>
        <div className="row mt-4">
            
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
      </Row>
    </Container>
  );
};

export default ProjectPerList;
