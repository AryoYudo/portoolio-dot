import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TeamCulture = () => {
  return (
    <Container className="my-5">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="mb-3">OUR TEAM CULTURE</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#AdaptiveLeadership</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#StartupVisionary</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#InnoMaestro</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#TeamAgility</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#UsersObsessed</h4>
          <h4 style={{ color: "#E31F52", opacity: "0.4" }}>#VelocityDecisionMaking</h4>
        </div>
        <hr style={{ borderTop: '2px solid', margin: '10px 0' }} />
      </div>


      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={4}>
          <Image
            src="path-to-your-image.jpg" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
        <Col md={8}>
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

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={8}>
          <h3 className="fw-bold">Morning Scrum Meeting</h3>
          <p>
            Setiap Pagi, Team kami mengadakan rapat harian untuk menyelaraskan tugas dan target harian.
            Rapat ini memastikan anggota memahami peran dan tangguang jawab mereka, serta mengidentifikasikan 
            prioritas utama hari itu. Dengan komunikasi yang terbuka,rapat ini menjaga kordinasi yang baik antar team,
            meminimalkan hambatan, dan memastikan semua, anggota siap bekerja menuju tujuan yang sama dengan fokus yang jelas.
          </p>
        </Col>
        <Col md={4}>
          <Image
            src="path-to-your-image.jpg" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={4}>
          <Image
            src="path-to-your-image.jpg" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
        <Col md={8}>
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

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={8}>
          <h3 className="fw-bold">Morning Scrum Meeting</h3>
          <p>
            Setiap Pagi, Team kami mengadakan rapat harian untuk menyelaraskan tugas dan target harian.
            Rapat ini memastikan anggota memahami peran dan tangguang jawab mereka, serta mengidentifikasikan 
            prioritas utama hari itu. Dengan komunikasi yang terbuka,rapat ini menjaga kordinasi yang baik antar team,
            meminimalkan hambatan, dan memastikan semua, anggota siap bekerja menuju tujuan yang sama dengan fokus yang jelas.
          </p>
        </Col>
        <Col md={4}>
          <Image
            src="path-to-your-image.jpg" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
      </Row>

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={4}>
          <Image
            src="path-to-your-image.jpg" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
        <Col md={8}>
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

      {/* Content Section */}
      <Row className="align-items-center mt-5">
        <Col md={8}>
          <h3 className="fw-bold">Morning Scrum Meeting</h3>
          <p>
            Setiap Pagi, Team kami mengadakan rapat harian untuk menyelaraskan tugas dan target harian.
            Rapat ini memastikan anggota memahami peran dan tangguang jawab mereka, serta mengidentifikasikan 
            prioritas utama hari itu. Dengan komunikasi yang terbuka,rapat ini menjaga kordinasi yang baik antar team,
            meminimalkan hambatan, dan memastikan semua, anggota siap bekerja menuju tujuan yang sama dengan fokus yang jelas.
          </p>
        </Col>
        <Col md={4}>
          <Image
            src="path-to-your-image.jpg" // Ganti dengan path gambar Anda
            alt="Team Achievement Dinner"
            className="w-100 rounded shadow"
          />
        </Col>
      </Row>
      
    </Container>
  );
};

export default TeamCulture;
