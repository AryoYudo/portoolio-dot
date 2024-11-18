import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TeamCulture = () => {
  return (
    <Container className="my-5">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="mb-3">OUR TEAM CULTURE</h2>
        <div className="d-flex justify-content-center gap-2">
          <span className="text-muted">#AdaptiveLeadership</span>
          <span className="text-muted">#StartupVisionary</span>
          <span className="text-muted">#InnoMaestro</span>
          <span className="text-muted">#TeamAgility</span>
          <span className="text-muted">#UsersObsessed</span>
          <span className="text-muted">#VelocityDecisionMaking</span>
        </div>
      </div>

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={6}>
          <Image
            src="path-to-your-image.jpg" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h3 className="fw-bold">Team Achievement Dinner</h3>
          <p>
            Tim DOT merayakan kesuksesan menyelesaikan proyek dengan kebersamaan
            dalam makan malam yang hangat. Tawa, cerita sukses, dan apresiasi
            mengalir di antara anggota tim, menciptakan momen penuh semangat
            dan inspirasi. Ini menjadi pemicu bagi kami untuk menghadapi
            tantangan proyek berikutnya dengan antusiasme yang lebih besar.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamCulture;
